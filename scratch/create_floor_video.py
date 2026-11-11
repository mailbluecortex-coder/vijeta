import cv2
import numpy as np

W, H = 720, 1280 # Vertical format matching the product video container
fps = 24
duration = 10
total_frames = fps * duration

fourcc = cv2.VideoWriter_fourcc(*'mp4v')
out = cv2.VideoWriter('public/assets/videos/floor-cleaner-commercial.mp4', fourcc, fps, (W, H))

home = cv2.imread('public/assets/images/lifestyle/clean-home.jpg')
bottle = cv2.imread('public/assets/images/products/floor-cleaner.jpg')

for f in range(total_frames):
    t = f / total_frames
    frame = np.zeros((H, W, 3), dtype=np.uint8)
    
    if t < 0.45:
        # Scene 1: Ken burns slow pan across pristine glistening marble flooring
        progress = t / 0.45
        h_h, h_w, _ = home.shape
        crop_h = int(h_h * (0.85 - 0.15 * progress))
        crop_w = int(h_w * (0.85 - 0.15 * progress))
        y1 = int((h_h - crop_h) * 0.7)
        x1 = int((h_w - crop_w) * progress)
        cropped = home[y1:y1+crop_h, x1:x1+crop_w]
        resized = cv2.resize(cropped, (W, H))
        frame = resized
        
        # Subtle dark lower glass gradient
        overlay = frame.copy()
        cv2.rectangle(overlay, (0, H - 250), (W, H), (15, 25, 45), -1)
        frame = cv2.addWeighted(overlay, 0.78, frame, 0.22, 0)
        
        cv2.putText(frame, 'STREAK-FREE SHINE', (40, H - 160), cv2.FONT_HERSHEY_DUPLEX, 1.05, (255, 255, 255), 2, cv2.LINE_AA)
        cv2.putText(frame, 'Marble & Vitrified Tile Surface Care', (40, H - 110), cv2.FONT_HERSHEY_SIMPLEX, 0.72, (220, 240, 255), 2, cv2.LINE_AA)
        cv2.putText(frame, '1:100 High-Dilution Active Economy', (40, H - 65), cv2.FONT_HERSHEY_SIMPLEX, 0.65, (100, 220, 255), 2, cv2.LINE_AA)
        
    elif t < 0.85:
        # Scene 2: Vijeta Floor Cleaner 5L Canister commercial showcase
        progress = (t - 0.45) / 0.4
        bg = np.full((H, W, 3), (242, 248, 255), dtype=np.uint8)
        
        # Smooth citrus glow vignette
        Y, X = np.ogrid[:H, :W]
        dist = np.sqrt((X - W/2)**2 + (Y - H/2)**2)
        vignette = np.clip(1 - (dist / 850) * 0.35, 0, 1)
        bg = (bg * vignette[:, :, None]).astype(np.uint8)
        
        # Scale and float bottle
        scale = 0.58 + 0.04 * progress
        b_h, b_w, _ = bottle.shape
        nw, nh = int(b_w * scale), int(b_h * scale)
        rbottle = cv2.resize(bottle, (nw, nh))
        
        by = int(H * 0.22 - 12 * np.sin(progress * np.pi))
        bx = int((W - nw) / 2)
        
        if by >= 0 and by + nh <= H and bx >= 0 and bx + nw <= W:
            bg[by:by+nh, bx:bx+nw] = rbottle
            
        frame = bg
        # Header text
        cv2.putText(frame, 'VIJETA FLOOR CLEANER', (40, 95), cv2.FONT_HERSHEY_DUPLEX, 0.92, (15, 35, 80), 2, cv2.LINE_AA)
        cv2.putText(frame, 'Commercial Surface Hygiene - 5L Canister', (40, 135), cv2.FONT_HERSHEY_SIMPLEX, 0.62, (200, 80, 10), 2, cv2.LINE_AA)
        
        # Feature card bottom
        cv2.rectangle(frame, (35, H - 210), (W - 35, H - 75), (255, 255, 255), -1)
        cv2.rectangle(frame, (35, H - 210), (W - 35, H - 75), (230, 200, 160), 2)
        cv2.putText(frame, 'ACTIVE CITRUS DEGREASER', (55, H - 155), cv2.FONT_HERSHEY_DUPLEX, 0.75, (15, 35, 80), 2, cv2.LINE_AA)
        cv2.putText(frame, 'Zero Sticky Residue | Non-Corrosive pH', (55, H - 110), cv2.FONT_HERSHEY_SIMPLEX, 0.6, (80, 80, 80), 1, cv2.LINE_AA)
        
    else:
        # Scene 3: Clean Living Space finale & factory direct supply
        progress = (t - 0.85) / 0.15
        resized = cv2.resize(home, (W, H))
        frame = resized
        overlay = frame.copy()
        cv2.rectangle(overlay, (0, 0), (W, H), (10, 20, 50), -1)
        alpha = min(0.65, 0.25 + 0.4 * progress)
        frame = cv2.addWeighted(overlay, alpha, frame, 1 - alpha, 0)
        
        cv2.putText(frame, 'CLEANLINESS - HEALTH - TRUST', (45, int(H/2 - 25)), cv2.FONT_HERSHEY_DUPLEX, 0.85, (255, 255, 255), 2, cv2.LINE_AA)
        cv2.putText(frame, 'Manufactured in Kurduwadi, Solapur', (45, int(H/2 + 20)), cv2.FONT_HERSHEY_SIMPLEX, 0.65, (200, 230, 255), 1, cv2.LINE_AA)
        cv2.putText(frame, 'Direct Wholesale Supply: +91 9423066050', (45, int(H/2 + 65)), cv2.FONT_HERSHEY_SIMPLEX, 0.65, (100, 255, 180), 2, cv2.LINE_AA)
    
    out.write(frame)

out.release()
print('Floor cleaner video rendered successfully')

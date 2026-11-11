import cv2
import numpy as np

W, H = 720, 1280
fps = 24
duration = 10
total_frames = fps * duration
fourcc = cv2.VideoWriter_fourcc(*'mp4v')

# 1. DISHWASH LIQUID COMMERCIAL
dishwash_img = cv2.imread('public/assets/images/products/dishwash-liquid.jpg')
home_img = cv2.imread('public/assets/images/lifestyle/clean-home.jpg')

out_dish = cv2.VideoWriter('public/assets/videos/dishwash-commercial.mp4', fourcc, fps, (W, H))

for f in range(total_frames):
    t = f / total_frames
    frame = np.zeros((H, W, 3), dtype=np.uint8)
    
    if t < 0.45:
        # Scene 1: Sparkling Clean Kitchen Atmosphere & Lime Power
        progress = t / 0.45
        h_h, h_w, _ = home_img.shape
        crop_h = int(h_h * (0.85 - 0.12 * progress))
        crop_w = int(h_w * (0.85 - 0.12 * progress))
        y1 = int((h_h - crop_h) * 0.4)
        x1 = int((h_w - crop_w) * progress)
        cropped = home_img[y1:y1+crop_h, x1:x1+crop_w]
        frame = cv2.resize(cropped, (W, H))
        
        # Subtle emerald / lime gradient overlay
        overlay = frame.copy()
        cv2.rectangle(overlay, (0, H - 260), (W, H), (15, 45, 20), -1)
        frame = cv2.addWeighted(overlay, 0.82, frame, 0.18, 0)
        
        cv2.putText(frame, 'ACTIVE LIME POWER', (40, H - 170), cv2.FONT_HERSHEY_DUPLEX, 1.05, (255, 255, 255), 2, cv2.LINE_AA)
        cv2.putText(frame, 'Instant Grease Dissolving Action', (40, H - 120), cv2.FONT_HERSHEY_SIMPLEX, 0.72, (200, 255, 220), 2, cv2.LINE_AA)
        cv2.putText(frame, 'Sparkling Utensils | Zero White Film', (40, H - 75), cv2.FONT_HERSHEY_SIMPLEX, 0.65, (120, 255, 160), 2, cv2.LINE_AA)
        
    elif t < 0.85:
        # Scene 2: Product Showcase
        progress = (t - 0.45) / 0.4
        bg = np.full((H, W, 3), (240, 253, 244), dtype=np.uint8)
        
        # Soft fresh lime green vignette
        Y, X = np.ogrid[:H, :W]
        dist = np.sqrt((X - W/2)**2 + (Y - H/2)**2)
        vignette = np.clip(1 - (dist / 850) * 0.35, 0, 1)
        bg = (bg * vignette[:, :, None]).astype(np.uint8)
        
        scale = 0.58 + 0.04 * progress
        b_h, b_w, _ = dishwash_img.shape
        nw, nh = int(b_w * scale), int(b_h * scale)
        rbottle = cv2.resize(dishwash_img, (nw, nh))
        
        by = int(H * 0.22 - 12 * np.sin(progress * np.pi))
        bx = int((W - nw) / 2)
        
        if by >= 0 and by + nh <= H and bx >= 0 and bx + nw <= W:
            bg[by:by+nh, bx:bx+nw] = rbottle
            
        frame = bg
        cv2.putText(frame, 'VIJETA DISHWASH LIQUID', (40, 95), cv2.FONT_HERSHEY_DUPLEX, 0.9, (15, 60, 25), 2, cv2.LINE_AA)
        cv2.putText(frame, 'Concentrated Kitchen Gel - 5L Canister', (40, 135), cv2.FONT_HERSHEY_SIMPLEX, 0.62, (20, 140, 50), 2, cv2.LINE_AA)
        
        # Info Box
        cv2.rectangle(frame, (35, H - 210), (W - 35, H - 75), (255, 255, 255), -1)
        cv2.rectangle(frame, (35, H - 210), (W - 35, H - 75), (180, 230, 195), 2)
        cv2.putText(frame, 'GENTLE ON HANDS, TOUGH ON OIL', (55, H - 155), cv2.FONT_HERSHEY_DUPLEX, 0.72, (15, 60, 25), 2, cv2.LINE_AA)
        cv2.putText(frame, '1 Spoonful = 1 Full Sinkload | Non-Caustic pH', (55, H - 110), cv2.FONT_HERSHEY_SIMPLEX, 0.58, (70, 70, 70), 1, cv2.LINE_AA)
        
    else:
        # Scene 3: Clean Finale
        progress = (t - 0.85) / 0.15
        resized = cv2.resize(home_img, (W, H))
        frame = resized
        overlay = frame.copy()
        cv2.rectangle(overlay, (0, 0), (W, H), (10, 40, 20), -1)
        alpha = min(0.68, 0.25 + 0.43 * progress)
        frame = cv2.addWeighted(overlay, alpha, frame, 1 - alpha, 0)
        
        cv2.putText(frame, 'CLEANLINESS - HEALTH - TRUST', (45, int(H/2 - 25)), cv2.FONT_HERSHEY_DUPLEX, 0.85, (255, 255, 255), 2, cv2.LINE_AA)
        cv2.putText(frame, 'Manufactured in Kurduwadi, Solapur', (45, int(H/2 + 20)), cv2.FONT_HERSHEY_SIMPLEX, 0.65, (200, 255, 220), 1, cv2.LINE_AA)
        cv2.putText(frame, 'Direct Wholesale Supply: +91 9423066050', (45, int(H/2 + 65)), cv2.FONT_HERSHEY_SIMPLEX, 0.65, (120, 255, 170), 2, cv2.LINE_AA)
        
    out_dish.write(frame)

out_dish.release()
print('Dishwash video rendered')

# 2. ROOM FRESHENER COMMERCIAL
freshener_img = cv2.imread('public/assets/images/products/room-freshener.jpg')
out_fresh = cv2.VideoWriter('public/assets/videos/room-freshener-commercial.mp4', fourcc, fps, (W, H))

for f in range(total_frames):
    t = f / total_frames
    frame = np.zeros((H, W, 3), dtype=np.uint8)
    
    if t < 0.45:
        # Scene 1: Serene Floral & Ambient Living Environment
        progress = t / 0.45
        h_h, h_w, _ = home_img.shape
        crop_h = int(h_h * (0.85 - 0.12 * progress))
        crop_w = int(h_w * (0.85 - 0.12 * progress))
        y1 = int((h_h - crop_h) * 0.2)
        x1 = int((h_w - crop_w) * (1 - progress))
        cropped = home_img[y1:y1+crop_h, x1:x1+crop_w]
        frame = cv2.resize(cropped, (W, H))
        
        overlay = frame.copy()
        cv2.rectangle(overlay, (0, H - 260), (W, H), (45, 15, 35), -1)
        frame = cv2.addWeighted(overlay, 0.82, frame, 0.18, 0)
        
        cv2.putText(frame, 'AMBIENT BOTANICAL MIST', (40, H - 170), cv2.FONT_HERSHEY_DUPLEX, 1.05, (255, 255, 255), 2, cv2.LINE_AA)
        cv2.putText(frame, 'Instant Odour Neutralization', (40, H - 120), cv2.FONT_HERSHEY_SIMPLEX, 0.72, (255, 220, 240), 2, cv2.LINE_AA)
        cv2.putText(frame, 'Long-Lasting Calming Fragrance Diffuser', (40, H - 75), cv2.FONT_HERSHEY_SIMPLEX, 0.65, (255, 160, 200), 2, cv2.LINE_AA)
        
    elif t < 0.85:
        # Scene 2: Product Showcase
        progress = (t - 0.45) / 0.4
        bg = np.full((H, W, 3), (255, 245, 250), dtype=np.uint8)
        
        Y, X = np.ogrid[:H, :W]
        dist = np.sqrt((X - W/2)**2 + (Y - H/2)**2)
        vignette = np.clip(1 - (dist / 850) * 0.35, 0, 1)
        bg = (bg * vignette[:, :, None]).astype(np.uint8)
        
        scale = 0.58 + 0.04 * progress
        b_h, b_w, _ = freshener_img.shape
        nw, nh = int(b_w * scale), int(b_h * scale)
        rbottle = cv2.resize(freshener_img, (nw, nh))
        
        by = int(H * 0.22 - 12 * np.sin(progress * np.pi))
        bx = int((W - nw) / 2)
        
        if by >= 0 and by + nh <= H and bx >= 0 and bx + nw <= W:
            bg[by:by+nh, bx:bx+nw] = rbottle
            
        frame = bg
        cv2.putText(frame, 'VIJETA ROOM FRESHENER', (40, 95), cv2.FONT_HERSHEY_DUPLEX, 0.9, (80, 15, 55), 2, cv2.LINE_AA)
        cv2.putText(frame, 'Fine Non-Aerosol Ambient Mist', (40, 135), cv2.FONT_HERSHEY_SIMPLEX, 0.62, (180, 40, 110), 2, cv2.LINE_AA)
        
        # Info Box
        cv2.rectangle(frame, (35, H - 210), (W - 35, H - 75), (255, 255, 255), -1)
        cv2.rectangle(frame, (35, H - 210), (W - 35, H - 75), (245, 200, 225), 2)
        cv2.putText(frame, 'AEROSOL-FREE BOTANICAL ESSENCE', (55, H - 155), cv2.FONT_HERSHEY_DUPLEX, 0.72, (80, 15, 55), 2, cv2.LINE_AA)
        cv2.putText(frame, 'Neutralizes Odours at Source | Hours of Freshness', (55, H - 110), cv2.FONT_HERSHEY_SIMPLEX, 0.56, (70, 70, 70), 1, cv2.LINE_AA)
        
    else:
        # Scene 3: Clean Finale
        progress = (t - 0.85) / 0.15
        resized = cv2.resize(home_img, (W, H))
        frame = resized
        overlay = frame.copy()
        cv2.rectangle(overlay, (0, 0), (W, H), (45, 10, 30), -1)
        alpha = min(0.68, 0.25 + 0.43 * progress)
        frame = cv2.addWeighted(overlay, alpha, frame, 1 - alpha, 0)
        
        cv2.putText(frame, 'CLEANLINESS - HEALTH - TRUST', (45, int(H/2 - 25)), cv2.FONT_HERSHEY_DUPLEX, 0.85, (255, 255, 255), 2, cv2.LINE_AA)
        cv2.putText(frame, 'Manufactured in Kurduwadi, Solapur', (45, int(H/2 + 20)), cv2.FONT_HERSHEY_SIMPLEX, 0.65, (255, 220, 240), 1, cv2.LINE_AA)
        cv2.putText(frame, 'Direct Wholesale Supply: +91 9423066050', (45, int(H/2 + 65)), cv2.FONT_HERSHEY_SIMPLEX, 0.65, (180, 255, 220), 2, cv2.LINE_AA)
        
    out_fresh.write(frame)

out_fresh.release()
print('Room freshener video rendered')

# 🎨 Créer les icônes et screenshots pour Google Play

## 📦 Images requises

### Icons
- **icon-192.png** : 192x192 pixels (app icon)
- **icon-512.png** : 512x512 pixels (splash screen)
- **maskable-192.png** : 192x192 (rounded version)
- **maskable-512.png** : 512x512 (rounded version)

### Screenshots
- **1-5 screenshots** : 1080x1920 pixels (portrait)
- Format : PNG ou JPEG
- Montrer : prières, qibla, settings

---

## 🎬 Option 1 : Utiliser CANVA (FACILE)

1. Va sur : https://www.canva.com/
2. Crée un compte gratuit
3. Cherche "App Icon 192x192"
4. Design avec :
   - Couleur : Émeraude (#0a4d3a)
   - Symbole : Mosquée 🕋
   - Texte : "Salati"
5. Download en PNG
6. Redimensionne pour les autres tailles

**Ou**

---

## 🖥️ Option 2 : Screenshots de ton app

C'est le plus simple !

### Prendre des screenshots
1. Ouvre ta PWA : https://salati2026.github.io/SaLaTi-/
2. Prends des screenshots de :
   - Écran d'accueil (horaires de prière)
   - Écran Qibla (boussole)
   - Écran Settings
   - Écran Hégirien

### Redimensionner (GIMP gratuit)
1. Va sur : https://www.gimp.org/
2. Ouvre chaque screenshot
3. Image → Scale Image → 1080x1920
4. Exporte en PNG

---

## 🚀 Option 3 : Utiliser l'outil online (PLUS RAPIDE)

Va sur : https://ezgif.com/resize

1. Upload ton screenshot
2. Change la taille à 1080x1920
3. Download

---

## 📂 Structure finale

Une fois les images créées, mets-les dans :

```
/icons/
  ├── icon-192.png
  ├── icon-512.png
  ├── maskable-192.png
  └── maskable-512.png

/screenshots/ (optionnel pour PWABuilder, nécessaire pour Play Store)
  ├── screenshot-1.png
  ├── screenshot-2.png
  ├── screenshot-3.png
  └── screenshot-4.png
```

---

## ✅ Checklist

- [ ] Icons 192x192 et 512x512 créées
- [ ] Icons placées dans `/icons/`
- [ ] manifest.json pointe vers les bonnes images
- [ ] 2-5 screenshots en 1080x1920 prêts
- [ ] PWABuilder téléchargé l'APK
- [ ] Google Play Console app créée
- [ ] APK uploadé et validé

---

## 💡 Conseil

Si tu n'as pas besoin de designs parfaits :
- Utilise des screenshots simples
- Google regarde surtout la fonctionnalité
- L'important c'est que ça marche bien

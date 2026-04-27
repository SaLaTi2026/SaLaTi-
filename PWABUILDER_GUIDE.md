# 📱 PWABuilder Guide - Salati sur Google Play

## ⚡ Résumé rapide
1. Va sur https://www.pwabuilder.com
2. Rentre l'URL : `https://salati2026.github.io/SaLaTi-/`
3. PWABuilder génère l'APK
4. Download APK
5. Upload sur Google Play Console

**Temps total: 30 min**

---

## 🎯 ÉTAPE 1 : PWABuilder (sur ton téléphone)

### 1.1 Accéder à PWABuilder
- Ouvre Chrome
- Va sur : **https://www.pwabuilder.com**
- Accepte les conditions

### 1.2 Entrer l'URL de Salati
- Dans le champ "Enter your PWA's URL"
- Copie-colle : `https://salati2026.github.io/SaLaTi-/`
- Clique "Start"

### 1.3 PWABuilder analyse ta PWA
- Attends 30 secondes
- Il va dire "✅ Great news! Your PWA meets all requirements"
- (Si erreurs d'icônes → pas grave, on peut continuer)

### 1.4 Télécharger l'APK
- Clique sur l'onglet **"Packages"** en haut
- Cherche **"Android"**
- Clique **"Download"** (Android APK)

✅ L'APK est téléchargé sur ton téléphone

---

## 🏢 ÉTAPE 2 : Google Play Console (sur ordinateur)

⚠️ **Cette étape NÉCESSITE un ordinateur**

### 2.1 Créer un compte Google Play Developer
- Va sur : https://play.google.com/console/
- Crée un compte (ou connecte-toi)
- Paie $25 (une fois pour la vie)
- Vérifie l'identité

### 2.2 Créer une nouvelle app
- Clique **"Create app"**
- Nom : **"Salati"**
- Langue par défaut : **"Arabic"**
- Type : **"App"**
- Gratuit : **✓ Oui**

### 2.3 Remplir les infos
- **App name** : Salati
- **Short description** : Prayer Times, Qibla, Duas
- **Full description** : 
  ```
  Salati - Application de prière musulmane
  - Horaires de prière précis (7 méthodes)
  - Boussole Qibla avec capteur GPS
  - 12+ Douaas authentiques
  - 5 langues : Arabe, Français, Anglais, Espagnol, Turc
  - Calendrier Hégirien ajustable
  - Fonctionne hors ligne
  - Aucune publicité
  ```

- **Category** : Lifestyle
- **Content rating** : General Audiences (or appropriate)
- **Privacy policy** : (tu peux utiliser la PWA URL ou créer une page)

### 2.4 Ajouter des screenshots
- Besoin de 2-5 screenshots (PNG ou JPEG)
- Taille : 1080x1920 (orientation portrait)
- Contenu : Écrans des prières, Qibla, settings

**Si tu n'as pas d'images :**
- Prends des screenshots de ta PWA
- Redimensionne-les à 1080x1920

### 2.5 Uploader l'APK
- Va à **"Release" → "Testing" → "Internal Testing"**
- Clique **"Upload new APK"**
- Sélectionne le fichier APK téléchargé
- Attends que Google valide (2-3 min)

### 2.6 Remplir les infos de version
- **Version notes** : "Initial release - Prayer times, Qibla compass"
- Clique **"Review"**

### 2.7 Signer et soumettre
- Va à **"Release" → "Production"**
- Crée une "New release"
- Sélectionne l'APK validé
- Remplir les release notes
- Clique **"Review release"**

✅ Submit !

---

## 📊 Temps d'attente
- Google va vérifier automatiquement (2-3h)
- Si tout OK → app disponible dans 24-48h
- Si problèmes → Google te contactera

---

## ⚠️ PROBLÈMES COURANTS

### "Invalid signing"
→ PWABuilder signe automatiquement, ça marche

### "Missing icons"
→ Pas grave, app fonctionne sans

### "Too many permissions"
→ PWABuilder n'en demande que les bonnes

### "Not enough description"
→ Ajoute plus de texte (min 80 caractères)

---

## 🎉 BRAVO !

Une fois approuvée, ta app sera :
- ✅ Sur Google Play
- ✅ Installable via "Salati" dans le Play Store
- ✅ Mises à jour automatiques via GitHub
- ✅ Visible mondiale

---

## 📞 Support
Si problème :
- Google Play Console a un chat de support
- Ou contacte PWABuilder : https://www.pwabuilder.com/support

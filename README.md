# 🕌 Salati — Application PWA Musulmane

**Salati** est une Progressive Web App (PWA) multilingue pour musulmans offrant :

- 🕋 **Horaires de prière** précis avec géolocalisation automatique
- 🔔 **Adhan multi-voix** : Maroc, La Mecque, Médine, Égypte, Turquie, Al-Aqsa
- 🧭 **Boussole Qibla** avec orientation GPS en temps réel
- 📅 **Calendrier hégirien** avec ajustement ±1 ou ±2 jours
- 📖 **12 Douaas authentiques** (quotidiennes, prières, protection)
- 🌍 **5 langues** : Français, العربية, English, Español, Türkçe
- ⚡ **Mode hors-ligne** grâce au Service Worker
- 📱 **Installable** sur Android, iOS, Desktop

---

## 🚀 Hébergement sur GitHub Pages

### 1. Créer le dépôt GitHub

```bash
cd muslim-pwa
git init
git add .
git commit -m "Initial commit: Salati PWA"
git branch -M main
git remote add origin https://github.com/VOTRE-USER/salati.git
git push -u origin main
```

### 2. Activer GitHub Pages

1. Va dans **Settings** → **Pages** de ton dépôt
2. Source : **Deploy from a branch**
3. Branch : **main** / **/(root)**
4. Clique **Save**
5. Ton app sera disponible sur : `https://VOTRE-USER.github.io/salati/`

⏱️ Compte 1-2 minutes pour le premier déploiement.

### ⚠️ Important — Sous-dossier GitHub Pages

Si ton URL est `https://user.github.io/salati/` (pas la racine du domaine), tout fonctionne car `start_url` et `scope` utilisent des chemins relatifs (`./`).

---

## 📦 Conversion Google Play via PWABuilder

### Étape 1 : Valider la PWA

1. Va sur **[pwabuilder.com](https://www.pwabuilder.com)**
2. Entre l'URL de ton app : `https://VOTRE-USER.github.io/salati/`
3. Clique **Start**
4. PWABuilder vérifie : Manifest ✅, Service Worker ✅, Icons ✅, Screenshots ✅

### Étape 2 : Générer le package Android

1. Clique **Package For Stores**
2. Sélectionne **Android**
3. Configure :
   - **Package ID** : `com.salati.muslim.pwa` (déjà défini dans le manifest)
   - **App name** : Salati
   - **Version** : 1.0.0
   - **Display mode** : Standalone
4. Clique **Generate Package**
5. Télécharge le fichier ZIP contenant :
   - `app-release-signed.aab` (pour Google Play)
   - `app-release-signed.apk` (pour test)
   - `signing.keystore` (**GARDE-LE PRÉCIEUSEMENT** - tu en auras besoin pour toutes les mises à jour)
   - `assetlinks.json` (à héberger)

### Étape 3 : Digital Asset Links

Pour que Google Play reconnaisse le lien entre ton app et ton site :

1. Extrait `assetlinks.json` du ZIP PWABuilder
2. Crée le dossier `.well-known/` à la racine de ton dépôt GitHub
3. Place `assetlinks.json` dedans
4. Vérifie : `https://VOTRE-USER.github.io/salati/.well-known/assetlinks.json`

### Étape 4 : Upload sur Google Play Console

1. Crée un compte **[Google Play Console](https://play.google.com/console)** (25$ une fois)
2. **Create app** → remplis les infos (nom, langue, catégorie : Lifestyle)
3. **Release → Production → Create new release**
4. Upload le fichier **`.aab`**
5. Remplis la **fiche du Store** :
   - Icône 512×512 (utilise `icons/icon-512.png`)
   - Images promotionnelles (utilise `screenshots/screen-wide.png`)
   - Screenshots téléphone (`screenshots/screen-home.png`, `screen-qibla.png`)
   - Description courte et longue (voir ci-dessous)
6. **Content rating** : remplis le questionnaire
7. **Data safety** : déclare la géolocalisation (prayer times) et notifications
8. Soumets pour review (2-7 jours généralement)

### Description suggérée pour Google Play

**Description courte (80 car.)** :
> Prières, Adhan, Qibla & Calendrier Hégirien — Votre compagnon musulman

**Description longue** :
```
Salati est votre compagnon musulman quotidien, conçu pour offrir une 
expérience spirituelle belle et précise.

🕋 HORAIRES DE PRIÈRE
Calculs précis basés sur votre localisation GPS. Méthodes disponibles :
Muslim World League, Egypt, Karachi, Umm al-Qura, Morocco, ISNA, 
Turkey Diyanet, et plus.

🔔 ADHAN MULTIPLES
Choisissez votre voix préférée : Maroc, La Mecque, Médine, Égypte, 
Turquie, Masjid Al-Aqsa.

🧭 BOUSSOLE QIBLA
Direction précise vers la Kaaba avec orientation GPS en temps réel.

📅 CALENDRIER HÉGIRIEN
Date du jour, dates islamiques importantes (Ramadan, Laylat al-Qadr, 
Aïd al-Fitr, Aïd al-Adha, Ashura, Mawlid...). Ajustement ±2 jours.

📖 DOUAAS AUTHENTIQUES
Collection de dou'as avec texte arabe, phonétique et traduction.

🌍 MULTILINGUE
Français, Arabic, English, Español, Türkçe.

Application gratuite, sans publicité, respectueuse de votre vie privée.
```

---

## 🧪 Test local

```bash
cd muslim-pwa
python3 -m http.server 8000
# Ouvrir http://localhost:8000
```

Pour tester l'installation PWA, utilise **Chrome DevTools → Application → Manifest**.

---

## 📁 Structure du projet

```
muslim-pwa/
├── index.html              # Point d'entrée
├── app.js                  # Logique principale
├── styles.css              # Styles
├── sw.js                   # Service Worker
├── manifest.json           # Manifest PWA
├── favicon.ico
├── apple-touch-icon.png
├── icons/                  # 10 icônes (72 → 512px + maskable)
├── screenshots/            # 3 captures pour stores
└── .well-known/
    └── assetlinks.json     # À générer après PWABuilder
```

---

## 🔑 Fonctionnalités techniques

- **API AlAdhan** pour horaires de prière (avec fallback calcul local)
- **Nominatim** pour géocodage inverse
- **Algorithme Umm al-Qura** pour conversion hégirienne (100% local, no API)
- **Device Orientation API** pour boussole (avec permission iOS 13+)
- **Web Audio API** pour Adhan
- **Notifications API** pour alertes
- **Cache API + Service Worker** pour mode hors-ligne

---

## 📜 Licence

MIT — Utilise, modifie, partage librement.

## 🤲 Contribution

Les contributions sont les bienvenues ! Ouvre une issue ou une PR.

---

**Qu'Allah accepte cet effort. آمين**

A simple, safe, and user-friendly web platform designed to support survivors of gender-based violence (GBV) in Kenya. The site provides verified emergency contacts, local support organizations (such as Usikimye, GVRC, COVAW, and others), educational resources, and a Quick Exit safety feature. Built as an MVP for my final-year project and aligned with SDG 5 — Gender Equality.
# GBV Support Site — MVP

## Overview
A privacy-first website to provide emergency resources and clear information for survivors of gender-based violence.

## MVP features
- Homepage with "You are not alone" message
- Emergency resources page (helplines, police, shelters)
- Quick Exit button
- Short info pages: What is GBV, How to stay safe
- Feedback (optional) via an email link or external form

## Tech
Static HTML/CSS/JS (Option A). Optional Flask backend for messages (Option B).

## Run locally (static)
1. `git clone <repo>`
2. `cd gbv-support-site/site`
3. Open `index.html` in a browser

## Run locally (Flask example)
1. `python -m venv venv`
2. `source venv/bin/activate` (or `venv\Scripts\activate` on Windows)
3. `pip install -r backend/requirements.txt`
4. `python backend/app.py`
5. Visit `http://127.0.0.1:5000`

## Safety & privacy notes
- Do not store PII on the server without explicit user consent and secure storage
- Use SSL/TLS in production (HTTPS)
- Implement Quick Exit button
- Disable analytics that record personal data (or anonymize)

  
## Live Demo

Check out the live site here: [GBV Support Site

https://prudence1738.github.io/Gbv-support-site/

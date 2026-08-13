# Ryujin-te website

This folder contains the complete static website for `ryujinte.com`. It requires no paid hosting, database, build process, or programming framework.

## Publish through GitHub Pages

1. Create a new public GitHub repository named `ryujinte-site`.
2. Upload every file in this folder to the repository root.
3. Open the repository's **Settings**, then **Pages**.
4. Under **Build and deployment**, select **Deploy from a branch**.
5. Select the `main` branch and `/ (root)` folder, then save.
6. Confirm that the temporary `github.io` address works before connecting the custom domain.
7. In Namecheap Advanced DNS, connect `ryujinte.com` to GitHub Pages using GitHub's current custom-domain instructions.
8. In the GitHub Pages settings, enter `ryujinte.com` as the custom domain and enable **Enforce HTTPS** once available. GitHub will create the required `CNAME` file.

## Before public launch

- Read `MEDIA-GUIDE.md` to add your instructor photograph and YouTube demonstration.
- Add the dedicated phone number to `site-config.js`; it remains hidden until configured.
- Add the Cal.com or Calendly event address to `site-config.js`. Every booking button updates automatically.
- The contact form uses FormSubmit and sends to `philip@ryujinte.com`. The first test submission triggers a one-time activation email; click that email before relying on the form.
- Confirm cancellation and refund terms before accepting payment.
- Review all public lineage language personally before promotion.

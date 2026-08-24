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

- Read `MEDIA-GUIDE.md` to add the four real photographs and YouTube demonstration called for by the art direction.
- The dedicated phone number and Cal.com introduction are configured in `site-config.js`.
- The contact form uses FormSubmit and sends to `ryujinte@gmail.com`. The first test submission triggers a one-time activation email; click that email before relying on the form. Visible CAPTCHA is disabled and the hidden honeypot remains enabled for basic spam filtering.
- Confirm cancellation and refund terms before accepting payment.
- Review the story and curriculum pages personally before promotion, especially the curriculum numbers and grading timeline.

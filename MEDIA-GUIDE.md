# Adding your own photographs and videos

You can do this entirely through the GitHub website. You do not need to edit the design.

## Add or replace the instructor photograph

1. Prepare a vertical JPG portrait in natural light. Face the camera with a neutral expression and wear what you actually train or teach in. If the inherited flower-print shirt appears anywhere on the site, this portrait is the place for it: as a fact about you, not as decoration.
2. Rename it exactly `philip-piluris.jpg`.
3. Open the `media` folder in your GitHub repository.
4. Select **Add file**, then **Upload files**.
5. Drag in the photograph and select **Commit changes**.

If a file with that name already exists, GitHub may ask you to replace it. The website will display the new photograph automatically after GitHub Pages updates.

## Add a featured YouTube video

YouTube is recommended for video because a large video stored directly in the website repository makes the site slow and awkward to maintain.

1. Upload the video to YouTube as **Public** or **Unlisted**.
2. Copy its video ID. In `https://youtu.be/ABC123`, the ID is `ABC123`. In `https://www.youtube.com/watch?v=ABC123`, it is also `ABC123`.
3. Open `media-config.js` in GitHub and select the pencil-shaped **Edit** button.
4. Find this line: `window.RYUJINTE_VIDEO_ID = "";`
5. Put the ID between the quotation marks: `window.RYUJINTE_VIDEO_ID = "ABC123";`
6. Select **Commit changes**.

The video section is completely hidden until a valid video ID is entered. It will then appear automatically as a responsive YouTube player.

## Fill the three distributed training-photo positions

The home page contains three additional ready-made photograph positions. Rename and upload your pictures as:

- `training-01.jpg` — a horizontal motion image shown immediately after the opening section
- `training-02.jpg` — a close technical crop of a hand, rooted foot, or stance detail shown inside the practice section
- `training-03.jpg` — a wide environmental image, ideally outdoors in morning light, shown beside the contact form

The photographs are deliberately spread through the page rather than collected in a gallery. Until a photograph is uploaded, its position disappears completely and the page closes the space automatically.

Use natural or hard directional light and ordinary training locations: a park, garage, driveway, small room or other place where the practice really happens. Keep the grade warm but restrained, with strong contrast and honest texture. Avoid faux-dojo staging, costumes, generic East Asian props, raised fists directed at the camera or theatrical aggression. A little motion blur is acceptable in `training-01.jpg`.

## Add still more photographs later

Upload additional files into the `media` folder using short descriptive names containing only lowercase letters, numbers and hyphens, such as `hand-technique.jpg`.

Uploading a new name stores the picture, but does not decide where it appears. Adding another visible photograph requires a small change to `index.html`. At that point, either follow an existing image block as a pattern or give Codex the filename and intended section.

## Photograph tips

- Use original photographs, not screenshots from social media.
- Horizontal images work best for demonstrations; vertical images work best for the instructor portrait.
- JPG is appropriate for photographs. Keep each web image under roughly 2 MB when practical.
- Add only images you own or have permission to publish.
- Avoid filenames containing spaces.

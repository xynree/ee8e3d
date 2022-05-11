# Messenger

A one-to-one realtime chat app. Functionality added for assessment from Hatchways.io.

## My Contributions

__Bug Fix: Sending/Loading Messages__

Adjusted posting function to handle a promise asynchronously with async/await.
Changed new message functions to functionally map to fresh state variables instead of mutating state.
Messages sort with `Moment.js` functions at the fetch before mapping to message UI.

__Feature: UI Implementation__

Login and Signup pages are set up to match the Figma [spec](https://www.figma.com/file/LnznWRFvyfWO5Mzztz5TzQ/translate-messenger?node-id=0%3A1) provided in #3 Issue.

<img height="350" alt="image" src="https://user-images.githubusercontent.com/77255525/166183895-bd859e51-319a-4652-817e-578219a88171.png"> <img height="350" alt="image" src="https://user-images.githubusercontent.com/77255525/166184014-daa6aeb5-f728-4ffb-8708-4d402cd37832.png">

__Feature: Image Messaging__

UI displays a preview attachment image for uploading a file before submitting a `POST` request to upload the image to a Cloudinary host. The image sent in the chat display message includes a functional modal to view at a larger size.

![image](https://user-images.githubusercontent.com/77255525/167200769-78c4ab20-5beb-4c0d-83a2-ec255425d5ac.png)
![image](https://user-images.githubusercontent.com/77255525/167200201-cf852f99-babe-4c4f-ba04-9e49dd1c58b2.png)

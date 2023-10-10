// const Photos = require('googlephotos');
// const { google } = require('googleapis');


// async function main() {
//     // const token = google.auth.fromAPIKey("AIzaSyB90C6-bTbyYeGmqtR8O_wgwHDFa-7QOjM")


    
//     const auth = new google.auth.GoogleAuth({
//         // Scopes can be specified either as an array or as a single, space-delimited string.
//         scopes: [
//           'https://www.googleapis.com/auth/drive',
//           'https://www.googleapis.com/auth/drive.readonly',
//           'https://www.googleapis.com/auth/drive.file',
//           'https://www.googleapis.com/auth/documents',
//           'https://www.googleapis.com/auth/documents.readonly',
//         ],
//       });
    
//       // Acquire an auth client, and bind it to all future calls
//       const authClient = await auth.getClient();
//       google.options({auth: authClient});

//     const service = google.drive({
//         version: 'v3',
//       });

//       const res = await service.files.list({
//         // Maximum number of shared drives to return per page.
//         pageSize: 1,
//       });
//       console.log(res.data);
// }

// main()


const {google} = require('googleapis');
const {GoogleAuth} = require('google-auth-library');

const auth = new GoogleAuth({
  credentials: {
    // Your Google Cloud Platform project ID
    projectId: 'juice-website-393903',
    // Your Google Cloud Platform API key
    apiKey: 'AIzaSyB90C6-bTbyYeGmqtR8O_wgwHDFa-7QOjM',
    client_email: "ftcteam16236@gmail.com",
    private_key: "AIzaSyB90C6-bTbyYeGmqtR8O_wgwHDFa-7QOjM"
  },
  private_key: "AIzaSyB90C6-bTbyYeGmqtR8O_wgwHDFa-7QOjM",
  client_email: "ftcteam16236@gmail.com",
  scopes: 'https://www.googleapis.com/auth/drive',

});
const service = google.drive({version: 'v3', auth: auth});

const request = {
  // 'q': 'mimeType="image/jpeg"',
  // 'fields': 'files(id, name, mimeType, thumbnailLink)',
};

service.files.list(request, (err, response) => {
  if (err) {
    console.log(err);
    return;
  }

  const files = response.data.files;

  for (const file of files) {
    const thumbnailLink = file.thumbnailLink;
    console.log(thumbnailLink);
  }
});
function LoadingPost () {
    console.log('Loading Posts data..');
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then (res => res.json())
    .then (data => DisplayInfo(data))

}
function DisplayInfo (data) {
    // console.log(data);
    // for (const posts of data) {
    //     console.log(posts);
    // }
    const postContainer = document.getElementById('post-container');
    for (const post of data) {
        const div = document.createElement('div');
        div.classList.add('post');
        div.innerHTML = `
          <h4>User-${post.userId}</h4>    
          <h5>${post.title}</h5>        
          <p>${post.body}</p>            
        `;
        postContainer.appendChild(div);
      }

}
LoadingPost();
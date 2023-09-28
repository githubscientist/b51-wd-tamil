let readPostsTable = document.createElement('div');

readPostsTable.innerHTML = `<h2>Read All Posts <button id="createPostButton">+ Create a Post</button></h2>
        <!-- display all the posts as a table -->
        <table id="posts-table">
            <thead>
                <tr>
                    <th>USER ID</th>
                    <th>POST ID</th>
                    <th>TITLE</th>
                    <th>DESCRIPTION</th>
                    <th>Edit POST</th>
                    <th>Delete POST</th>
                </tr>
            </thead>

            <tbody>

            </tbody>
        </table>`;

document.body.appendChild(readPostsTable);

function deletePost(postId) {
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
        method: 'DELETE',
    })
        .then(() => {
            console.log(`post with id ${postId} deleted successfully`);
;    })
}

function editPost(postId) {
    // show the edit/update post form
    document.querySelector('#editPostBlock').style.display = 'block';

    // get the contents of the post with post id 'postId'
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
        .then((response) => response.json())
        .then((post) => {
            // load the contents of the post to the edit/update form
            let editUserID = document.querySelector('#editUserID');
            let editPostID = document.querySelector('#editPostID');
            let editPostTitle = document.querySelector('#editPostTitle');
            let editPostBody = document.querySelector('#editPostBody');

            editUserID.value = post.userId;
            editPostID.value = post.id;
            editPostTitle.value = post.title;
            editPostBody.value = post.body;

            editUserID.setAttribute('disabled', 'true');
            editPostID.setAttribute('disabled', 'true');
        });
}

function getPosts() {
    // by default, hide both the forms
    document.querySelector('#createPostBlock').style.display = 'none';

    document.querySelector('#editPostBlock').style.display = 'none';

    fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response) => response.json())
        .then((posts) => {
            // get the reference of the table body
            let tableBody = document.querySelector('#posts-table tbody');

            // clear the existing table body contents if any
            tableBody.innerHTML = ``;

            // for every post in the posts object
            posts.forEach(post => {
                // create a table data element <td>
                let row = document.createElement('tr');

                // set the content of the table data element
                row.innerHTML = `
                    <td>${post.userId}</td>
                    <td>${post.id}</td>
                    <td>${post.title}</td>
                    <td>${post.body}</td>
                    <td>
                        <button onclick="editPost(${post.id})">Edit</button>
                    </td>
                    <td>
                        <button onclick="deletePost(${post.id})">Delete</button>
                    </td>
                `;
                // append the element to the table body
                tableBody.appendChild(row);
            });
        });
}


// get all the posts and display as a table
getPosts();

async function createPost(event) {
    event.preventDefault();

    console.log('creating post...');

    // get the form elements
    let userIDDropDown = document.querySelector('#userIDDropDown');
    let postTitle = document.querySelector('#postTitle');
    let postBody = document.querySelector('#postBody');

    // create a new post object
    let newPost = {
        userId: userIDDropDown.value,
        title: postTitle.value,
        body: postBody.value
    }

    // make the api request to post the data to te server to get the post created
    try {
        // make the call
        let postedJSON = await fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify(newPost),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        });

        let postedObject = await postedJSON.json();

        console.log(postedObject);
        console.log('Post Creation Successful!');

        // reset the form
        userIDDropDown.value = '';
        postTitle.value = '';
        postBody.value = '';

        // set the focus to the user id drop down
        userIDDropDown.focus();
    } catch (error) {
        console.log('error creating the post', error);
    }
}

async function updatePost(event) {
    event.preventDefault();

    console.log('updating post...');

    // get the form elements
    let editUserID = document.querySelector('#editUserID');
    let editPostID = document.querySelector('#editPostID');
    let editPostTitle = document.querySelector('#editPostTitle');
    let editPostBody = document.querySelector('#editPostBody');

    // create a new post object
    let updatedPost = {
        userId: editUserID.value,
        id: editPostID.value,
        title: editPostTitle.value,
        body: editPostBody.value
    }

    // make the api request to post the data to te server to get the post created
    try {
        // console.log(postID);
        // make the call
        let postedJSON = await fetch(`https://jsonplaceholder.typicode.com/posts/${editPostID.value}`, {
            method: 'PUT',
            body: JSON.stringify(updatedPost),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        });

        let postedObject = await postedJSON.json();

        console.log(postedObject);
        console.log('Post Updated successfully!');
        document.querySelector('#editPostBlock').style.display = 'none';
    } catch (error) {
        console.log('error creating the post', error);
    }
}

// get the reference of the create post form
let createPostForm = document.querySelector('#create-post-form');
let editPostForm = document.querySelector('#edit-post-form');

// attach an event listener to the form submit
createPostForm.addEventListener('submit', createPost);

let createPostButton = document.querySelector('#createPostButton');

createPostButton.addEventListener('click', () => {
    // hide the edit/update post form
    document.getElementById('editPostBlock').style.display = 'none';
    // show the create post form
    document.getElementById('createPostBlock').style.display = 'block';
});

editPostForm.addEventListener('submit', updatePost);
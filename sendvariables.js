// gets properties from page
story_hostname = window.location.hostname
story_url = window.location
story_title = document.title
story_title = escape(story_title);

// alert(story_hostname);
// alert(story_url);
// alert(story_title);

if (story_hostname != 'www.npr.org') {
    alert("This bookmarklet is intended to be used in conjunction with content on NPR.org");
    } else {
    story_id = NPR.community.storyId
    // alert(story_id);
    location.replace('http://johntynan.com/wp-admin/edit.php?page=get-npr-stories&nprid=' + story_id );
}


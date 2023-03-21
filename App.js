let audience_bx = document.getElementById('audience');
let show_bx_1 = document.getElementsByClassName('show_bx_1')[0];

audience_bx.addEventListener('click', () => {
    show_bx_1.classList.toggle('show_bx_active')
})

// textarea height control
function auto_grow(e) {
    e.style.height = "5px";
    e.style.height = (e.scrollHeight)+ "px"
}

const audience_check_off = () => {
    Array.from(document.getElementsByClassName('check_audience_i')).forEach((i) => {
        i.style.color = "#fff";
    })
}

Array.from(document.getElementsByClassName('check_audience')).forEach((i, a) => {
    i.addEventListener('click', () => {
        audience_check_off();
        document.getElementsByClassName('check_audience_i')[a].style.color = "#1ca1f1";
        if (a === 0) {
            audience_bx.style.color = "#1ca1f1";
            audience_bx.style.borderColor = "#1ca1f1";
            audience_bx.innerHTML = `Everyone <i class="fas fa-angle-down"></i>`;
        } else {
            audience_bx.innerHTML = `Twitter Circle <i class="fas fa-angle-down"></i>`;
            audience_bx.style.color = "green";
            audience_bx.style.borderColor = "green";
        }
        show_bx_1.classList.toggle('show_bx_active');
    })

})

let select_reply_btn = document.getElementsByClassName('select_reply_btn')[0];
let who_can_reply_bx = document.getElementsByClassName('who_can_reply_bx')[0];

select_reply_btn.addEventListener('click', () => {
    who_can_reply_bx.classList.toggle('show_bx_active');
})





const who_can_reply_off = () => {
    Array.from(document.getElementsByClassName('who_can_reply_i')).forEach((i) => {
        i.style.color = "#fff";
    })
}

Array.from(document.getElementsByClassName('who_can_reply')).forEach((i, a) => {
    i.addEventListener('click', () => {
        who_can_reply_off();
        document.getElementsByClassName('who_can_reply_i')[a].style.color = "#1ca1f1";
        if (a === 0) {
            select_reply_btn.innerHTML = `Everyone can replay <i class="fas fa-globe-asia"></i>`;
        } else if(a ===1){
            select_reply_btn.innerHTML = `People ypu follow <i class="fas fa-user-check"></i>`;
        } else {
            select_reply_btn.innerHTML = `Only people you mention <i  style="font-style: normal;">@</i>`;
        }
        who_can_reply_bx.classList.toggle('show_bx_active');
    })

})



let tweet_text_area = document.getElementById('tweet_text_area');
let tweet_post = document.getElementById('tweet_post');
let text_limit = document.getElementById('text_limit');

tweet_text_area.addEventListener('keyup', () => {
    if (tweet_text_area.value.length >0) {
        tweet_post.style.background = "rgb(28,160,242)";
    } else {
        tweet_post.style.background = "rgb(28,160,242, .5)";
    }

    let a = tweet_text_area.value.length;
    let b = parseInt((a / 2));
    let c = (500 - b);
    text_limit.innerText = c + " word can write";

        if (c === 0) {
            text_limit.style.color = 'red';
        } else {
            text_limit.style.color = 'black';
        }

})
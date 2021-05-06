$(document).ready(function() {
    let screenWidth = $(window).width()
    if (screenWidth < 768) {
        $(".rules").removeClass("active");
        $(".rules__title").removeClass("active-title");
    }

    let rulesSum = $(".rules li").length;
    $(".rules-sum").html(rulesSum);

    let notesSum = $(".notes li").length;
    $(".notes-sum").html(notesSum);

    let forbiddenSum = $(".forbidden li").length;
    $(".forbidden-sum").html(forbiddenSum);

    let answerSum = $(".answer li").length;
    $(".answer-sum").html(answerSum);
})

$(".form form").submit(function(e) {
    e.preventDefault();
    let email = $('#mail').val();
    let question = $("#question").val();
    if (email.length < 1) {
        $('#mail').addClass("error");
    } else {
        $('#mail').removeClass("error");
    }
    if (question.length < 1) {
        $('#question').addClass("error");
    } else {
        $('#question').removeClass("error");
    }


})


$(".rules__title").click(function() {
    openRules();
});
$(".notes__title").click(function() {
    openNotes();
})
$(".forbidden__title").click(function() {
    openForbidden();
})
$(".answer__title").click(function() {
    openAnswer();
})
$(".header__burger").click(function() {
    openBurgerMenu();
    console.log("sdsd");
});



function openRules() {
    $(".rules__items").slideToggle(300);
    $(".rules").toggleClass("active");
    $(".rules__title").toggleClass("active-title");
}

function openNotes() {
    $(".notes__items").slideToggle(300);
    $(".notes").toggleClass("active");
    $(".notes__title").toggleClass("active-title");
}

function openForbidden() {
    $(".forbidden__items").slideToggle(300);
    $(".forbidden").toggleClass("active");
    $(".forbidden__title").toggleClass("active-title");
}

function openAnswer() {
    $(".answer__items").slideToggle(300);
    $(".answer").toggleClass("active");
    $(".answer__title").toggleClass("active-title");
}

function openBurgerMenu() {
    $(".header__burger").toggleClass("active");
    $(".nav ul").slideToggle();
}

$("body").on("click", ".link", function(event) {
    event.preventDefault();
    var id = $(this).attr('href'),
        top = $(id).offset().top;
    $('body,html').animate({ scrollTop: top }, 1500);
    if (screenWidth < 768) {
        $(".header__burger").removeClass("active");
        $(".nav ul").hide();
    }

});
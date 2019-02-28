const DOMAIN = 'http://localhost:3000'
const API_ROOT = DOMAIN + '/users'

function getUsersAPI(renderFunction) {
    $.ajax({
        method: 'GET',
        url: API_ROOT,
    }).done(function (users) {
        if (renderFunction) renderFunction(users)
    })
}

function getUserByIdAPI(id, renderFunction) {
    $.ajax({
        method: 'GET',
        url: API_ROOT + '/' + id,
    }).done(function (user) {
        renderFunction(user)
    }).catch(function () {
        renderFunction(null)
    })
}

function createUserAPI(user, redirectLink) {
    $.ajax({
        method: 'POST',
        url: API_ROOT,
        data: user
    }).done(function () {
        if (redirectLink) window.location.href = redirectLink
    })
}

function updateUserAPI(userId, userInfo, redirectLink) {
    $.ajax({
        method: 'PUT',
        url: API_ROOT + '/' + userId,
        data: userInfo
    }).done(function () {
        if (redirectLink) window.location.href = redirectLink
    })
}

function deleteUserAPI(id, renderFunction) {
    $.ajax({
        method: 'DELETE',
        url: API_ROOT + '/' + id
    }).done(function () {
        if (renderFunction) renderFunction()
    })
}

function getFormAPI(renderFunction) {
    $.ajax({
        method: 'GET',
        url: DOMAIN + '/form.html',
    }).done(function (html) {
        if (renderFunction) renderFunction(html)
    })
}
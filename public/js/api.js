const API_ROOT = "/users";

function getUsersAsync() {
  return $.ajax({
    method: "GET",
    url: API_ROOT + "?_sort=id&_order=desc",
  });
}

function getUserByIdAsync(id) {
  return $.ajax({
    method: "GET",
    url: API_ROOT + "/" + id,
  });
}

function createUserAsync(user) {
  return $.ajax({
    method: "POST",
    url: API_ROOT,
    data: user,
  });
}

function updateUserAsync(user) {
  return $.ajax({
    method: "PUT",
    url: API_ROOT + "/" + user.id,
    data: user,
  });
}

function deleteUserAsync(id) {
  return $.ajax({
    method: "DELETE",
    url: API_ROOT + "/" + id,
  });
}

function getUsersWithCallback(renderFunction) {
  $.ajax({
    method: "GET",
    url: API_ROOT + "?_sort=id&_order=desc",
  })
    .done(function (users) {
      renderFunction(users);
    })
    .catch(function () {
      renderFunction([]);
    });
}

function getUserByIdWithCallback(id, renderFunction) {
  $.ajax({
    method: "GET",
    url: API_ROOT + "/" + id,
  })
    .done(function (user) {
      renderFunction(user);
    })
    .catch(function () {
      renderFunction({});
    });
}

function createUserWithCallback(user, callback) {
  $.ajax({
    method: "POST",
    url: API_ROOT,
    data: user,
  }).done(function () {
    callback();
  });
}

function updateUserWithCallback(user, callback) {
  $.ajax({
    method: "PUT",
    url: API_ROOT + "/" + user.id,
    data: userInfo,
  }).done(function () {
    callback();
  });
}

function deleteUserWithCallback(id, callback) {
  $.ajax({
    method: "DELETE",
    url: API_ROOT + "/" + id,
  }).done(function () {
    callback();
  });
}

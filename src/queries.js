const users = require("../db/users.json");
const music = require("../db/music.json");
const faves = require("../db/faves.json");

/**
 * Should return all the users faves.
 * @param {string} user 
 */
const getFavesForUser = (user) => {

};

/**
 * Should check the faves list and return all common songs.
 * @param {string} user1 
 * @param {string} user2 
 */
const findCommonFaves = (user1, user2) => {

};

/**
 * Will Return Users Password
 * @param {string} user 
 */
const checkPassword = (user) => {

};

module.exports = { 
    getFavesForUser,
    findCommonFaves,
    checkPassword
}
// // Your DOM library code goes here inside of an IIFE and must set a global variables called md.


(function() {
  'use strict'
  var one = function(selector){
    return document.querySelector(selector)
  }

    var all = function(selector){
      return document.querySelectorAll(selector)
    }

    var remove = function(selector){
      return document.querySelector(selector).remove()
    }

    var addClass = function(selector, className){
      return document.querySelector(selector).classList.add(className)
    }

    var removeClass = function(selector, className){
      return document.querySelector(selector).classList.remove(className)
    }

    var hasClass = function(selector, className){
      return document.querySelector(selector).classList.contains(className)
    }

    var getAttr = function(selector, attributeName){
      return document.querySelector(selector).getAttribute(attributeName)
    }

    var setAttr = function(selector, attributeName, attributeValue){
      return document.querySelector(selector).setAttribute(attributeName, attributeValue)
    }
    var setHTML = function(selector, innerHTMLValue){
      return document.querySelector(selector).innerHTML = innerHTMLValue
    }

    var getHTML = function(selector){
      return document.querySelector(selector).innerHTML
    }

    var getAPI = function(url1){
      return fetch(url1)
    }

    var getProp = function(object1, property){
      return document.querySelector(object1).property.value
    }

    var setProp = function(object1, property, propertyValue){
      return document.querySelector(object1).property.value = propertyValue
    }



  window.md = {//declaring our library name and making it an object.
    one: one,
    all: all,
    remove: remove,
    addClass: addClass,
    removeClass: removeClass,
    hasClass: hasClass,
    getAttr: getAttr,
    setAttr: setAttr,
    setHTML: setHTML,
    getHTML: getHTML,
    getAPI: getAPI,
    getProp: getProp,
    setProp: setProp,
  }
}())

"use strict"

const request = require('request');
const fs = require('fs');
const Prismic = require('prismic-nodejs');

var ENDPOINT = "https://gavin.cdn.prismic.io/api";
var ACCESSTOKEN = null; // Only if your API is private

exports.getAll = function(req, res){
  var page = req.query.page;
  var type = req.query.type;
  console.log(req);
  console.log(type);
  console.log(page);
    Prismic.Api(ENDPOINT, function(err,Api) {
      // what is this?
      Api.form('everything')
      .ref(Api.master())
      .query(Prismic.Predicates.at('document.type', type))
      .orderings('[my.'+type+'.date desc]')
      .pageSize(5)
      .page(page)
      .submit( function(err, response) {
        if (err){
          res.status(500).json(response);
        }
        else{
          console.log('getall');
          console.log(response);
          res.status(200).json(response);
        }
      });
    });
}

exports.getSingle = function (req, res) {
  var type = req.query.type;
  var uid = req.query.uid;
  var queryString;

  queryString ='my.'+type+'.uid';



  console.log("getSingle", queryString, uid);


  Prismic.Api(ENDPOINT, function (err, Api) {

      Api.form('everything')
          .ref(Api.master())
          .query(Prismic.Predicates.at(queryString, uid))
          .submit(function (err, response) {
            console.log(err);
            console.log(response);
            if (err){
              res.status(500).json(err);
            }
            else{
              res.status(200).json(response);
            }

          });
    });

};




exports.getType = function (req, res) {



  Prismic.Api(ENDPOINT, function (err, Api) {
      Api.form('everything')
          .ref(Api.master())
          .query(Prismic.Predicates.at("document.type", type))
          .orderings('['+orderField+']')
          .pageSize(100)
          .submit(function (err, response) {

              response.results;
              console.log($rootScope.Styling);
              $rootScope.$broadcast('stylingReady');
              // $rootScope.$apply();


              // The documents object contains a Response object with all documents of type "product".
              var page = response.page; // The current page number, the first one being 1
              var results = response.results; // An array containing the results of the current page;
              // you may need to retrieve more pages to get all results
              var prev_page = response.prev_page; // the URL of the previous page (may be null)
              var next_page = response.next_page; // the URL of the next page (may be null)
              var results_per_page = response.results_per_page; // max number of results per page
              var results_size = response.results_size; // the size of the current page
              var total_pages = response.total_pages; // the number of pages
              var total_results_size = response.total_results_size; // the total size of results across all pages
              return results;
              $rootScope.$apply();
          });
    });

};

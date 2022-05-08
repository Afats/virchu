#!/bin/sh


# source globe_comp.js # using source to link to file
#
# file="/home/pi/Desktop/javascript/javascsriptFile.js"
#
# echo $test #the variable from javascriptFile.js
#
# url=$0

curl -X 'GET' \                                                          ─╯
  'https://cvpgorqsib.execute-api.ap-southeast-2.amazonaws.com/D1/api?location=Mali' \

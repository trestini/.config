#!/bin/bash

SESSION_NAME="JHSF_$(date +'%Y-%m-%d')"

EXISTS=`zlj ls | grep $SESSION_NAME | wc -l | awk '{print $1}'`

OPTS="-l /Users/trestini/.config/zellij/layouts/default.kdl -s $SESSION_NAME"
OPTS_FAIL="a $SESSION_NAME"

if [ $EXISTS == "1" ]; then
    zlj $OPTS_FAIL
else
    zlj $OPTS 
fi;

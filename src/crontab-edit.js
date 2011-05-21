/*
 * Claes Mogren, 2011
 */

// Based on advice from http://perfectionkills.com/unnecessarily-comprehensive-look-into-a-rather-insignificant-issue-of-global-objects-creation/
(function(global) {
    if(crontabEdit=== undefined) {
        global.crontabEdit = {};
    }
}(this));


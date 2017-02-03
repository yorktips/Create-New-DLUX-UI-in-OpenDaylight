/*
 * Copyright (c) 2014 Etherton Technologies, and others.  All rights reserved.
 *
 * This program and the accompanying materials are made available under the
 * terms of the Eclipse Public License v1.0 which accompanies this distribution,
 * and is available at http://www.eclipse.org/legal/epl-v10.html
 */

define(['app/dpi/dpi.module','app/dpi/dpi.services', 'app/dpi/dpi.directives'], function(dpi, service) {

	dpi.controller('dpiTestController', function($scope) {
		$scope.dpi = {
                  firstName:'Mahesh',
                  lastName:'Parashar',
                  fees:500,

                  subjects:[
                          {name:'Physics',marks:70},
                          {name:'Chemistry',marks:80},
                          {name:'Math',marks:65}
                  ],
  
                  fullName: function() {
                          var studentObject;
                          studentObject = $scope.dpi;
                          return studentObject.firstName + " " + studentObject.lastName;
                  }
               };
        });
});



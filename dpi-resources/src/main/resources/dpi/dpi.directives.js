/*
 * Copyright (c) 2014 Etherton Technologies, and others.  All rights reserved.
 *
 * This program and the accompanying materials are made available under the
 * terms of the Eclipse Public License v1.0 which accompanies this distribution,
 * and is available at http://www.eclipse.org/legal/epl-v10.html
 */

define(['app/dpi/dpi.module'], function(dpi) {
   dpi.directive('mcTopBar', function () {
		return {
			restrict: "EA",
			scope: true,
			template: "<div>Your name in directive is  : {{name}}</div>"+
			"Change your name in directive: <input type='text' ng-model='name' />"
	};
    });

});



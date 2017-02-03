/*
 * Copyright (c) 2014 Etherton Technologies, and others.  All rights reserved.
 *
 * This program and the accompanying materials are made available under the
 * terms of the Eclipse Public License v1.0 which accompanies this distribution,
 * and is available at http://www.eclipse.org/legal/epl-v10.html
 */

define(['app/dpi/dpi.module'], function(dpi) {
	
    topbar.factory('taskFactory',function () {
        var factory = {};
        factory.getTaskData = function () {
            return {
                count: 4,
                latest: [
                    {
                        title: "Software Update",
                        percentage: 65
                    },
                    {
                        title: "Hardware Upgrade" ,
                        percentage: 35 ,
                        progressBarClass: "progress-bar-danger"
                    },
                    {
                        title: "Unit Testing" ,
                        percentage: 15  ,
                        progressBarClass: "progress-bar-warning"
                    },
                    {
                        title: "Bug Fixes" ,
                        percentage: 90 ,
                        progressClass: "progress-striped active",
                        progressBarClass: "progress-bar-success"
                    }
                ]
            };

        };
        return factory;
    });

});


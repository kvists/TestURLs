/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
		$.support.cors=true;
	
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    },
	test: function () {
        var URL = arguments[0] !== null && typeof arguments[0] === 'object' ?
            document.getElementById('txtURL').value : arguments[0];

		var e = document.getElementById('deviceready');
		var test = {
			value: 'respondpls'
        };
		
		e.querySelector('.ajax.received').innerHTML = 'Testing..';
		
		// Call external resource
		$.ajax({
          type: 'GET',
          url: URL,
          data: test
        }).done(function(data, textStatus, jqXHR) {
			e.querySelector('.ajax.listening').setAttribute('style', 'display:none;');
			e.querySelector('.ajax.received').setAttribute('style', 'display:block;');
			e.querySelector('.ajax.received').innerHTML = 'AJAX: readyState: ' + jqXHR.readyState + ', status: ' + jqXHR.status;
        }).fail(function(jqXHR) {
			e.querySelector('.ajax.listening').setAttribute('style', 'display:none;');
			e.querySelector('.ajax.received').setAttribute('style', 'display:block;');
			e.querySelector('.ajax.received').innerHTML = 'AJAX: readyState: ' + jqXHR.readyState + ', status: ' + jqXHR.status;
        });
	}
};

app.initialize();
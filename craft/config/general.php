<?php

/**
 * General Configuration
 *
 * All of your system's general configuration settings go in here.
 * You can see a list of the default settings in craft/app/etc/config/defaults/general.php
 */

return array(
	
	'*' => array(
		'cpTrigger' => 'n3w574r7',
		'enableCsrfProtection' => true,
		'generateTransformsBeforePageLoad' => true,
		'maxUploadFileSize' => 33554432
	),

	'zdfs.com' => array(
		'environmentVariables' => array(
			'basePath' => '/var/www/html/images',
			'baseUrl' => 'http://zdfs.com/images'
		)
	),

	'zdfs.dev' => array(
		'environmentVariables' => array(
			'basePath' => '/Users/zach.forrest/Hubs/zdfs.com/html/images',
			'baseUrl' => 'https://zdfs.dev/images'
		)
	)

);

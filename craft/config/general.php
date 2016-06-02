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
	
	'45.55.10.201' => array(
		'siteUrl' => 'http://45.55.10.201',
		'environmentVariables' => array(
			'basePath' => '/var/www/html/images',
			'baseUrl' => 'http://45.55.10.201/images'
		)
	),

	'zdfs.dev' => array(
		'environmentVariables' => array(
			'basePath' => '/Users/zdfs/Hubs/zdfs.com/html/images',
			'baseUrl' => 'https://zdfs.dev/images'
		)
	)

);

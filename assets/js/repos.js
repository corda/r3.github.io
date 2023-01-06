'use strict';
(function() {
	/*
		{
			'category': 'samples',
			'name': 'Features Java',
			'url': 'https://github.com/corda/samples-java/tree/master/Features',
			'parent_url': 'https://github.com/corda/samples-java',
			'language': 'Java',
			'watchers': 30,
			'forks': 70,
			'language': 'Java',
			'description': 'This repository contains multiple sample apps, from CorDapps that help you get started, all the way to demonstrating specific features and advanced usage.'
		}
	*/

	let Repositories = [
		{
			'category': 'samples',
			'name': 'Features Java',
			'url': 'https://github.com/corda/samples-java/tree/master/Features',
			'parent_url': 'https://github.com/corda/samples-java',
			'language': 'Java'
		},
		{
			'category': 'samples',
			'name': 'Basic Java',
			'url': 'https://github.com/corda/samples-java/tree/master/Basic',
			'parent_url': 'https://github.com/corda/samples-java',
			'language': 'Java'
		},
		{
			'category': 'samples',
			'name': 'Advance Java',
			'url': 'https://github.com/corda/samples-java/tree/master/Advanced',
			'parent_url': 'https://github.com/corda/samples-java',
			'language': 'Java',
			
		},
		{
			'category': 'samples',
			'name': 'TokenSamples  Java',
			'url': 'https://github.com/corda/samples-java/tree/master/Tokens',
			'parent_url': 'https://github.com/corda/samples-java',
			'language': 'Java'
		},
		{
			'category': 'samples',
			'name': 'AccountSamples Java',
			'url': 'https://github.com/corda/samples-java/tree/master/Accounts',
			'parent_url': 'https://github.com/corda/samples-java',
			'language': 'Java'
		},
		{
			'category': 'samples',
			'name': 'Features Kotlin',
			'url': 'https://github.com/corda/samples-kotlin/tree/master/Features',
			'parent_url': 'https://github.com/corda/samples-kotlin',
			'language': 'Kotlin'
		},
		{
			'category': 'samples',
			'name': 'Basic Kotlin',
			'url': 'https://github.com/corda/samples-kotlin/tree/master/Basic',
			'parent_url': 'https://github.com/corda/samples-kotlin',
			'language': 'Kotlin'
		},
		{
			'category': 'samples',
			'name': 'Advance Kotlin',
			'url': 'https://github.com/corda/samples-kotlin/tree/master/Advanced',
			'parent_url': 'https://github.com/corda/samples-kotlin',
			'language': 'Kotlin'
		},
		{
			'category': 'samples',
			'name': 'TokenSamples Kotlin',
			'url': 'https://github.com/corda/samples-kotlin/tree/master/Tokens',
			'parent_url': 'https://github.com/corda/samples-kotlin',
			'language': 'Kotlin'
		},
		{
			'category': 'samples',
			'name': 'AccountSamples Kotlin',
			'url': 'https://github.com/corda/samples-kotlin/tree/master/Accounts',
			'parent_url': 'https://github.com/corda/samples-kotlin',
			'language': 'Kotlin'
		},
		{
			'category': 'samples',
			'name': 'Community Contribute CorDapps',
			'url': 'https://github.com/corda/community-cordapps',
			'parent_url': '',
			'language': 'Java',
            'watchers': 0,
            'forks': 2,
            'description': 'These projects are built and maintained by the Corda Developer Community. All of the projects are developed using Corda Open Source. We hope these CorDapps can help you find inspiration for what you can build on Corda!'
		},
		{
			'category': 'templates',
			'name': 'Cordapp-template-java',
			'url': 'https://github.com/corda/cordapp-template-java',
			'parent_url': '',
			'language': 'Java'
		},
		{
			'category': 'templates',
			'name': 'Cordapp-template-kotlin',
			'url': 'https://github.com/corda/cordapp-template-kotlin',
			'parent_url': '',
			'language': 'Kotlin'
		},
		{
			'category': 'sdks',
			'name': 'TokenSDK',
			'url': 'https://github.com/corda/token-sdk',
			'parent_url': '',
			'language': 'Kotlin'
		},
		{
			'category': 'sdks',
			'name': 'AccountSDK',
			'url': 'https://github.com/corda/accounts',
			'parent_url': '',
			'language': 'Kotlin'
		},
		{
			'category': 'sdks',
			'name': 'Business Membership',
			'url': 'https://github.com/corda/bn-extension',
			'parent_url': '',
			'language': 'Kotlin',
            'watchers': 4,
            'forks': 2,
            'description': 'The Corda platform extension for creating and managing business networks allows a node operator to define and create a logical network based on a set of common CorDapps as well as a shared business context.'
		},
		{
			'category': 'tools',
			'name': 'Node Explorer',
			'url': 'https://github.com/corda/node-explorer',
			'parent_url': '',
			'language': 'JavaScript'
		},
		{
			'category': 'tools',
			'name': 'Corda Design Language',
			'url': 'https://github.com/corda/cdl-example',
			'parent_url': '',
			'language': 'Kotlin',
            'watchers': 7,
            'forks': 3,
            'description': 'This CorDapp provides an example implementation of a CDL design for two Parties to come to an agreement over the purchase of some goods.'
		},
		{
			'category': 'tools',
			'name': 'Corda settler',
			'url': 'https://github.com/corda/corda-settler',
			'parent_url': '',
			'language': 'Kotlin'
		},
		{
			'category': 'tools',
			'name': 'Corda CLI Plugin Host',
			'url': 'https://github.com/corda/corda-cli-plugin-host',
			'parent_url': '',
			'language': 'Groovy'
		},
		{
			'category': 'cordaCore',
			'name': 'Corda/corda',
			'url': 'https://github.com/corda/corda',
			'parent_url': '',
			'language': 'Kotlin'
		},
		{
			'category': 'cordaCore',
			'name': 'Corda/djvm',
			'url': 'https://github.com/corda/djvm',
			'parent_url': '',
			'language': 'Kotlin'
		},
		{
			'category': 'cordaCore',
			'name': 'Corda Runtime OS',
			'url': 'https://github.com/corda/corda-runtime-os',
			'parent_url': '',
			'language': 'Kotlin'
		},
		{
			'category': 'cordaCore',
			'name': 'Corda API',
			'url': 'https://github.com/corda/corda-api',
			'parent_url': '',
			'language': 'Kotlin'
		},
	];

	let categories = [
        'cordaCore',
		'samples',
        'sdks',
		'templates',
		'tools',
	];

	function addRepoDiv(repoName, repoTitle) {
		$(`<div id="${repoName}-div" class="repo-div">`).appendTo('#allrepos-div');
		$(`<h2 id="${repoName}-title" class="repo-title mb-3 mt-5">`).appendTo(`#${repoName}-div`);
		$(`#${repoName}-title`).text(repoTitle);
		$(`<div id="${repoName}-repos" class="row row-cols-1 row-cols-md-4 g-4">`).appendTo(`#${repoName}-div`);
	}

	function addRepoMenuItem(repoName, repoTitle) {
		var $item = $('<li class="nav-item repo-item">');
		$item.append($(`<a id="${repoName}" class="nav-link" href="#${repoName}">`).html(repoTitle));
		$item.appendTo('.repo-menu');
	}

	function setRepo(repoName, repoTitle) {
		addRepoMenuItem(repoName, repoTitle);
		addRepoDiv(repoName, repoTitle);
	}

	function topFunction() {
		document.body.scrollTop = 0; // For Safari
		document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
	}

	function setSelectedMenuItem(repo) {
		$('#search').val('');
		$('#search').keyup();
		$('.repo-item > a').removeClass('active');
		if (repo !== '#allrepos') {
			$('.repo-div').removeClass('repo-div-show');
			$('.repo-div').addClass('repo-div-hide');
			$(repo + '-div').addClass('repo-div-show');
			$(repo + '-div').removeClass('repo-div-hide');
		} else {
			$('.repo-div').removeClass('repo-div-hide');
			$('.repo-div').addClass('repo-div-show');
		}
		$(repo).addClass('active');
	}

	function renderRepo(repo) {
		var category = repo.category;
		if (categories.includes(category)) {
			var $item = $('<div>').addClass('card h-100"').addClass(repo.language === null ? '' : repo.language);

			var $title = $('<div>');
			$('<h4>').html(repo.name).appendTo($title);
			$title.appendTo($item);

			var $repo_properties = $('<div>').addClass('meta');

			var $watchers = $('<div>');
			$watchers.addClass('watchers').text(repo.watchers === null ? '' : repo.watchers).appendTo($watchers);
			$watchers.appendTo($repo_properties);

			var $forks = $('<div>');
			$forks.addClass('forks').text(repo.forks === null ? '' : repo.forks).appendTo($forks);
			$forks.appendTo($repo_properties);

			var $language = $('<div>');
			$language.addClass('language').text(repo.language === null ? '' : repo.language).appendTo($language);
			$language.appendTo($repo_properties);

			$repo_properties.appendTo($item);

			var $description = $('<div>');
			$('<p>').addClass('').text(repo.description === null ? '' : repo.description).appendTo($description);
			$description.appendTo($item);

			var $link = $('<div>');
			var $anchor = $('<a target="_blank">').attr('href', repo.url);
			$('<p>').addClass('link').text('Clone Repo').appendTo($anchor);
			$anchor.appendTo($link);
			$link.appendTo($item);

			$('<div>').append($item).appendTo('#' + category + '-repos');
		}
	}

	function addNoResultsFoundDiv() {
		var $description = $('<div class="repos-not-found">');
		$('<p>').addClass('').text('No results found').appendTo($description);
		$description.appendTo('#allrepos-div');
		$('.repos-not-found').hide();
	}

	function setRepos() {
		$('<div id="allrepos-div">').appendTo('#wrapper');
		addNoResultsFoundDiv();

		addRepoMenuItem('allrepos', 'All Repos');

        setRepo('cordaCore', 'Corda Core');
		setRepo('samples', 'Samples');
        setRepo('sdks', 'SDKs');
		setRepo('templates', 'Templates');
		setRepo('tools', 'Tools');
		
	}

	function show_cards(cards) {
		cards.each(function() {
			$(this).parent().removeClass('repo-card-hide');
			$(this).parent().addClass('repo-card-show');
			let repo = '#' + $(this).parent().parent().attr('id');
			let cantidad = $(repo).children('.repo-card-show').length;
			if (cantidad > 0) {
				$(repo).parent().removeClass('repo-div-hide');
				$(repo).parent().addClass('repo-div-show');
			}
			let categorias = $('#allrepos-div').children('.repo-div-show').length;
			if (categorias > 0) {
				$('.repos-not-found').hide();
			}
		});
	}

	function hide_cards(cards) {
		cards.each(function() {
			$(this).parent().removeClass('repo-card-show');
			$(this).parent().addClass('repo-card-hide');
			let repo = '#' + $(this).parent().parent().attr('id');
			let cantidad = $(repo).children('.repo-card-show').length;
			if (cantidad < 1) {
				$(repo).parent().removeClass('repo-div-show');
				$(repo).parent().addClass('repo-div-hide');
			}
			let categorias = $('#allrepos-div').children('.repo-div-show').length;
			if (categorias < 1) {
				$('.repos-not-found').show();
			}
		});
	}

	function searchEvent() {
		/*
		 * Search for $repo.name & render result
		 */
		$('#search').keyup(function() {
			location.hash = '';
			var val = $.trim($(this).val()).replace(/ +/g, ' ').toLowerCase();
			var shown_cards = $('.card');
			show_cards(shown_cards);

			var hidden_cards = shown_cards.filter(function() {
				var text = $(this).text().replace(/\s+/g, ' ').toLowerCase();
				return text.indexOf(val) === - 1;
			});
			hide_cards(hidden_cards);
		});
	}

	function bodyAnalytics() {
		$('body').on('click', 'a[data-analytics-category][data-analytics-action]', function(e) {
			if (!window.ga) {
				return;
			}

			if (this.hostname && this.hostname !== location.hostname) {
				e.preventDefault();
				var url = this.href;

				setTimeout(function() {
					document.location = url;
				}, 200);
			}

			var $el = $(this);
			var data = {
				hitType: 'event',
			};

			data.eventCategory = $el.attr('data-analytics-category');
			data.eventAction = $el.attr('data-analytics-action');

			if ($el.attr('data-analytics-label')) {
				data.eventLabel = $el.attr('data-analytics-label');
			}

			if ($el.attr('data-analytics-value')) {
				data.eventValue = parseInt($el.attr('data-analytics-value'), 10);
			}

			window.ga('send', data);
		});
	}

	function menuItemEvent() {
		$('.repo-item > a').on('click', function(e) {
			const repo = '#' + this.id;
			setSelectedMenuItem(repo);
		});
	}

	function init() {
		setRepos();
		Repositories.forEach(repo => renderRepo(repo));
		searchEvent();
		bodyAnalytics();
		menuItemEvent();
		var hash = new URL(document.URL).hash || '#allrepos';
		setSelectedMenuItem(hash);
	}

	function validRepositories(data) {
		data.map(function(e) {
			Repositories.map(function(repo) {
				if ((repo.parent_url) && (repo.parent_url === e.html_url)) {
					repo.watchers = e.watchers;
					repo.forks = e.forks;
					repo.language = e.language;
					repo.description = e.description;
				} else if (repo.url === e.html_url) {
					repo.watchers = e.watchers;
					repo.forks = e.forks;
					repo.language = e.language;
					repo.description = e.description;
				}
			});
		});
	}

	$.ajax({
		 url: 'https://api.github.com/orgs/corda/repos',
		 method: 'GET',
		 data: {per_page: 1000},
	 })
	 .done(function(data) {
		 validRepositories(data);
		 $('#wrapper .loader').remove();
		 init();
	 });
}());

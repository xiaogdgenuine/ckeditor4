/* bender-tags: editor, 4462 */
/* bender-ckeditor-plugins: basicstyles,toolbar */

( function() {
	'use strict';

	bender.test( {
		'test reattached editor contains the same data': function() {
			var startupData = '<p>CKEditor4</p>';

			bender.editorBot.create( {
				startupData: startupData
			}, function( bot ) {
				var editorContainer = bot.editor.container,
					editorContainerParent = editorContainer.getParent(),
					iframeElement = bot.editor.ui.space( 'contents' ).findOne( 'iframe' );

				editorContainer.remove();
				editorContainerParent.append( editorContainer );

				CKEDITOR.tools.setTimeout( function() {
					resume( function() {
						var editorData = iframeElement.getFrameDocument().getBody().getHtml();
						assert.beautified.html( startupData, editorData );
					} );
				}, 500 );

				wait();
			} );
		}
	} );
} )();

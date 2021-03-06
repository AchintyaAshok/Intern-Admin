/*
	Each story list item in the storylistview which is like an accordian-style interface.
*/

define([ 
	'backbone',
	'underscore',
	'text!templates/ViewStoryListItem.html'
], function(Backbone, _, Template){

	var StoryListItemView = Backbone.View.extend({

		tagName: 'div',

		template: _.template(Template.replace(/(\r\n|\n|\r)/gm,"")),//'<br/>The Story Author:<i><%= author %></i><hr/>'),//Template),//'<h2><%= headline %></h2> by <%= authorFirstName %> <%= authorLastName %>'),
	
		attributes: {"class":"storyListItem"},	//	Append this class to each Story List Item so we can reference it later


		initialize: function(){
		},

		render: function(){
			this.$el.attr('id',this.model.id);
			//console.log('@render in StoryListItemView :: checking if model even exists->', this.model.toJSON());
			
			this.$el.append(this.template(this.model.toJSON()));	//	get the json of the model & retrieve the elements, then input
																//	the elements into that template member defined above initialize
			
			return this.$el; // return the view
		},

		events: {
			/*	Add event listeners to the child elements of this StoryListItemView, jquery goes here	*/
		},

	});

	return StoryListItemView;

});
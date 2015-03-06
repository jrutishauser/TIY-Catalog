(function () {
    angular.module('tiy-catalog', [])
        .controller('ProductController', function () {
            this.prodArray = [1, 2, 3, 4, 5, 6];
			this.variationuno = false;
			this.variationdos = false;	
			this.moused = function(){
				this.variationuno = true;
			};
			this.unmoused = function(){
				this.variationuno = false;	
			};
			this.moused2 = function(){
				this.variationdos = true;
			};
			this.unmoused2 = function(){
				this.variationdos = false;	
			};
			this.pics = [
			'http://www.q-tees.co.uk/image/cache/data/t-shirts2/html%20green-542x700.jpg',
			'http://www.gekius.com/image/cache/data/products/sourcecontrol/github/code%20sucks-600x800.jpg'		
			];
			this.imgnum = 0;
       		this.morepics = function(){
				this.imgnum++;
				if (this.imgnum === this.pics.length){
					this.imgnum = 0;	
				}	
			}; 
		})








    ; // closes module  
})();

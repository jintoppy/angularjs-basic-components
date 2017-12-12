angular.module('myapp', []);

angular.module('myapp')
    .component('app', {
        templateUrl: 'app.component.html',
        controller: function(){
            this.dogList = [
                'data:image/jpeg;base64,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',
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAK2AtjfpWpyYS28_0X-9bUnfN47Qx0pSVp7E7eFnwxqTQ4-V1',
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNuxBvVAyaT-kCNFrr1jO36WhgtezWVZn640H0wOCYRdRrBqC7',
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRp57rYDWeaKwMmXQnA-H67e03BhBgKAN1xwQZr2R9qW6pVOAf5'
            ];

            this.catList = [
                'https://static.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg',
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsXmSs_OLCSYFhXkOzl_nIoa3ipxALxbUfJ1OF6VF1-wUJkGBs',
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTM-BHDeAazv2me7qPVaC9gknZTQ_NPceqNoR2Cnu81YwsnMccQ',
                'data:image/jpeg;base64,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'
            ];
        }
    });

angular.module('myapp')
    .component('mySlideshow', {
        templateUrl: 'slideshow.component.html'
    });    

angular.module('myapp')
    .component('myButton', {
        bindings: {
            myTitle: '@',
            onBtnClick: '&'
        },
        templateUrl: 'mybutton.component.html',
        controller: function(){
            this.onClick = function(){
                console.log('inside component');
                this.onBtnClick();
            };
        }
    });
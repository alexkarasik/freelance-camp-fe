"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var DocumentsComponent = (function () {
    function DocumentsComponent() {
        this.pageTitle = "Document Dashboard";
        this.documents = [
            {
                title: "my First Doc",
                description: 'qefwevwvv vqerbqerb',
                file_url: 'http://google.com',
                updated_at: '11/11/16',
                image_url: 'https://www.spiderg.com/wp-content/uploads/2016/11/1-11.jpg',
            },
            {
                title: "my Second Doc",
                description: 'qefwevwvv vqerbqerb',
                file_url: 'http://google.com',
                updated_at: '11/11/16',
                image_url: 'https://www.mawista.com/blog/wp-content/uploads/2015/12/working-freelancer-germany.jpeg',
            },
            {
                title: "my Last Doc",
                description: 'qefwevwvv vqerbqerb',
                file_url: 'http://google.com',
                updated_at: '11/11/16',
                image_url: 'http://www.livemint.com/rf/Image-621x414/LiveMint/Period2/2016/04/02/Photos/Computerpic-kXYB--621x414@LiveMint.jpg',
            }
        ];
    }
    DocumentsComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'documents',
            templateUrl: 'documents.component.html'
        })
    ], DocumentsComponent);
    return DocumentsComponent;
}());
exports.DocumentsComponent = DocumentsComponent;
//# sourceMappingURL=documents.component.js.map
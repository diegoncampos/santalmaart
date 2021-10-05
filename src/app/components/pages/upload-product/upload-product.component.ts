import { Component, OnInit } from '@angular/core';
import { Dimensions, ImageCroppedEvent, ImageTransform, LoadedImage } from 'ngx-image-cropper';
import { Product } from 'src/app/components/models/product';
import { Image } from 'src/app/components/models/image';
import { Category } from 'src/app/components/models/category';
import { Editor } from 'ngx-editor';

@Component({
    selector: 'app-upload-product',
    templateUrl: './upload-product.component.html',
    styleUrls: ['./upload-product.component.scss']
})
export class UploadProductComponent implements OnInit {
    imageChangedEvent: any = null;
    croppedImage: any = '';
    canvasRotation = 0;
    rotation = 0;
    scale = 1;
    showCropper = false;
    containWithinAspectRatio = false;
    transform: ImageTransform = {};
    public categories: Category[] = [{id: 1, name: "Category 1"}, {id: 2, name: "Category 2"}, {id: 3, name: "Category 3"}]
    public images: Image = {
        id: 0,
        name: "",
        url: "",
        alternativeText: "",
        width: 0,
        height: 0,
        thumbnailUrl: ""
    }
    public product: Product = {
        id: 0,
        title: "",
        oldPrice: 0,
        currentPrice: 0,
        shortDesc: "",
        longDesc: "",
        sku: "",
        inStock: true,
        addInfo: "",  //aditional info
        published_at: "",
        slug: "",  //short name to redirect
        categoryId: 0,
        outOfStock: false,
        onSell: false,
        images: [this.images]
    };

    longDesc_editor: Editor = new Editor();
    addInfo_editor: Editor = new Editor();


    constructor() { }

    ngOnInit(): void {
    }

    ngOnDestroy(): void {
        this.longDesc_editor.destroy();
        this.addInfo_editor.destroy();
    }

    fileChangeEvent(event: any): void {
        this.imageChangedEvent = event;
    }

    imageCropped(event: ImageCroppedEvent) {
        this.croppedImage = event.base64;
        console.log(event.base64);
    }

    imageLoaded() {
        this.showCropper = true;
        console.log('Image loaded');
    }

    cropperReady(sourceImageDimensions: Dimensions) {
        console.log('Cropper ready', sourceImageDimensions);
    }

    loadImageFailed() {
        console.log('Load failed');
    }

    rotateLeft() {
        this.canvasRotation--;
        this.flipAfterRotate();
    }

    rotateRight() {
        this.canvasRotation++;
        this.flipAfterRotate();
    }

    private flipAfterRotate() {
        const flippedH = this.transform.flipH;
        const flippedV = this.transform.flipV;
        this.transform = {
            ...this.transform,
            flipH: flippedV,
            flipV: flippedH
        };
    }


    flipHorizontal() {
        this.transform = {
            ...this.transform,
            flipH: !this.transform.flipH
        };
    }

    flipVertical() {
        this.transform = {
            ...this.transform,
            flipV: !this.transform.flipV
        };
    }

    resetImage() {
        this.scale = 1;
        this.rotation = 0;
        this.canvasRotation = 0;
        this.transform = {};
    }

    newImage() {
        this.imageChangedEvent = null;
        this.croppedImage = "";
        this.resetImage();
    }

    zoomOut() {
        this.scale -= .1;
        this.transform = {
            ...this.transform,
            scale: this.scale
        };
    }

    zoomIn() {
        this.scale += .1;
        this.transform = {
            ...this.transform,
            scale: this.scale
        };
    }

    toggleContainWithinAspectRatio() {
        this.containWithinAspectRatio = !this.containWithinAspectRatio;
    }

    updateRotation() {
        this.transform = {
            ...this.transform,
            rotate: this.rotation
        };
    }

    save() {
        console.log("Save", this.product);
    }

    remove() {
        console.log("Remove");
    }

}

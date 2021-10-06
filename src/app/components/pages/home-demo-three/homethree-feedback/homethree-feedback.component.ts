import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Feedback } from 'src/app/components/models/feedback'

@Component({
	selector: 'app-homethree-feedback',
	templateUrl: './homethree-feedback.component.html',
	styleUrls: ['./homethree-feedback.component.scss']
})
export class HomethreeFeedbackComponent implements OnInit {
	public Arr = Array;
	public chunkedFeedbackList: Array<Array<Feedback>> = [];
	public feedbackList: Array<Feedback> = [
		{
			id: "0",
			feedback: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Minim veniam, quis nostrud ullamco laboris nisi ut aliquip ex ea commodo consequat consectetur adipiscing.',
			name: 'El Oso',
			from: 'Instagram',
			rating: 4
		},
		{
			id: "1",
			feedback: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Minim veniam, quis nostrud ullamco laboris nisi ut aliquip ex ea commodo consequat consectetur adipiscing.',
			name: 'Daddy Yankee',
			from: 'Facebook',
			rating: 3
		},
		{
			id: "2",
			feedback: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Minim veniam, quis nostrud ullamco laboris nisi ut aliquip ex ea commodo consequat consectetur adipiscing.',
			name: 'Elena No',
			rating: 4
		},
		{
			id: "3",
			feedback: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Minim veniam, quis nostrud ullamco laboris nisi ut aliquip ex ea commodo consequat consectetur adipiscing.',
			name: 'Lalan',
			from: 'Hacedor de vinos',
			rating: 4
		},
		{
			id: "4",
			feedback: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Minim veniam, quis nostrud ullamco laboris nisi ut aliquip ex ea commodo consequat consectetur adipiscing.',
			name: 'Someone',
			rating: 1
		}
	];
	constructor() { }

	ngOnInit(): void {
		const chunk = <T>(arr: T[], size: number): T[][] =>
			[...Array(Math.ceil(arr.length / size))].map((_, i) =>
				arr.slice(size * i, size + size * i)
			);
		console.log("Chunk: ", chunk(this.feedbackList, 2));
		this.chunkedFeedbackList = chunk(this.feedbackList, 2);
	}

	bgImage = [
        {
            img: `assets/img/feedback-bg.jpg`
        }
    ]

    feedbackSlides: OwlOptions = {
		items: 3,
		nav: true,
		loop: true,
		mouseDrag: false,
        touchDrag: false,
        pullDrag: false,
		margin: 10,
		dots: false,
		autoplay: true,
		autoplayHoverPause: true,
		navText: [
			"<i class='fas fa-chevron-left'></i>",
			"<i class='fas fa-chevron-right'></i>",
		],
		slideBy:'page',
		responsive: {
			0: {
			  items: 1
			},
			400: {
			  items: 2
			},
			740: {
			  items: 3
			},
			940: {
			  items: 4
			}
		  },
    }

	// fourFeedbacksListArray(arr: Array<Feedback>) {
		// const chunk = <T>(arr: T[], size: number): T[][] =>
		// 	[...Array(Math.ceil(arr.length / size))].map((_, i) =>
		// 		arr.slice(size * i, size + size * i)
		// 	);
		// console.log("Chunk: ", chunk)
	// }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-component',
  templateUrl: './new-component.component.html',
  styleUrls: ['./new-component.component.scss']
})
export class NewComponentComponent implements OnInit {
  featuredPhotos: any = [];
  agencyServiceRef: any;
  userInformation: any;
  userProfilePic: any;
  displaySubscribedContent: boolean;
  displayPostContent: boolean;
  contentType: string;

  MyDefaultSubscribedValue: any;
  MyDefaultLiveValue: any;
  SelectedSubscribedIdValue: any;
  SelectedLiveIdValue: any;
  MyDefaultPostvalue: any;
  selectedPostIdValue: any;

  // test code

  pictures = [
    {
      img:
        'https://tr-images.condecdn.net/image/AYrgOrOO6kj/crop/1620/f/adam-driver-tracks-film-still-conde-nast-traveller-5oct15-rex_.jpg',
      title: 'HOLI FEST',
      text: 'Hey folks are you waiting for this event eagerly...',
      date: 'EVENT DATES',
      day: '0908/2021 - 05/11/2021 '
    },
    {
      img:
        'https://tr-images.condecdn.net/image/AYrgOrOO6kj/crop/1620/f/adam-driver-tracks-film-still-conde-nast-traveller-5oct15-rex_.jpg',
      title: 'ECO RETREAT',
      text: 'Hey folks are you waiting for this event eagerly...',
      date: 'EVENT DATES',
      day: '0908/2021 - 05/11/2021 '
    }
    // {
    //   img:"https://tr-images.condecdn.net/image/AYrgOrOO6kj/crop/1620/f/adam-driver-tracks-film-still-conde-nast-traveller-5oct15-rex_.jpg",
    //   title:"HOLI FEST",
    //   text:"Hey folks are you waiting for this event eagerly..."
    // },
    // {
    //   img:"https://tr-images.condecdn.net/image/AYrgOrOO6kj/crop/1620/f/adam-driver-tracks-film-still-conde-nast-traveller-5oct15-rex_.jpg",
    //   title:"HOLI FEST",
    //   text:"Hey folks are you waiting for this event eagerly..."
    // }
  ];

  timeLine = [
    {
      date: '13 JULY 2017',
      content: 'Amazing homestay with local food and beautiful Scenery',
      author: 'Biswaranjan',
      img: 'https://cdn.icon-icons.com/icons2/2643/PNG/512/male_boy_person_people_avatar_icon_159358.png',
      delete: 'assets/travel-timeline/Trash_Delete.svg',
      edit: 'https://www.shareicon.net/data/512x512/2016/04/08/746661_edit_512x512.png',
      backgroundImg: 'https://i.pinimg.com/originals/e8/c7/c4/e8c7c4d4e14a9e3b21faf3d7b37c5b03.jpg'
    },
    {
      date: '13 JULY 2017',
      content: 'Amazing homestay with local food and beautiful Scenery',
      author: 'Biswa',
      img: 'https://cdn.icon-icons.com/icons2/2643/PNG/512/male_boy_person_people_avatar_icon_159358.png',
      delete: 'assets/travel-timeline/Trash_Delete.svg',
      edit: 'https://www.shareicon.net/data/512x512/2016/04/08/746661_edit_512x512.png',
      backgroundImg: 'https://www.itl.cat/pngfile/big/23-236826_beautiful-scenery-wallpaper-hd-free-download-for-pc.jpg'
    },
    {
      date: '13 JULY 2017',
      content: 'Amazing homestay with local food and beautiful Scenery',
      author: 'Kylie Jenner',
      img: 'https://cdn.icon-icons.com/icons2/2643/PNG/512/male_boy_person_people_avatar_icon_159358.png',
      delete: 'assets/travel-timeline/Trash_Delete.svg',
      edit: 'https://www.shareicon.net/data/512x512/2016/04/08/746661_edit_512x512.png',
      backgroundImg: 'https://i.pinimg.com/originals/e8/c7/c4/e8c7c4d4e14a9e3b21faf3d7b37c5b03.jpg'
    }
    // { message: 'WE GET TO KNOW YOU' },
    // { message: 'UPLOAD YOUR ROOM AD' },
    // { message: 'BOOM! HERE ARE YOUR TOP MATCHES' },
    // { message: 'CHAT WITH YOUR PERFECT ROOMMATE' },
    // { message: 'FINALIZE THE ONLINE CONTRACT' },
  ];

  // ends here

  goLiveDropdown = [
    {
      id: 1,
      name: 'Go Live',
      value: 'go_live'
    },
    {
      id: 2,
      name: 'Spot Travel',
      value: 'spot_travel'
    },
    {
      id: 3,
      name: 'Trip Vidz',
      value: 'trip_vidz'
    }
  ];
  Photos = [
    {
      media: 'SUBSCRIBED CONTENT',
      src: 'subscribed_conent'
    },
    {
      name: 'SUBSCRIBED CONTENT',
      value: 'subscribed_conent'
    }
  ];
  subscribedContentDropdown = [
    {
      id: 1,
      name: 'SUBSCRIBED CONTENT',
      value: 'subscribed_conent'
    },
    {
      id: 2,
      name: 'ALL CONTENT',
      value: 'all_travel2ube_conent'
    }
  ];

  postTypeDropdown = [
    {
      name: 'ALL',
      value: 'all-posts'
    },
    {
      name: 'EVENTS',
      value: 'events'
    },
    {
      name: 'CHECK-IN',
      value: 'check_in'
    },
    {
      name: 'TRIPS',
      value: 'my-trips'
    },
    {
      name: 'BLOGS',
      value: 'blogs'
    },
    {
      name: 'LIVE STREAM',
      value: 'live_stream'
    },

    {
      name: 'DISCOVER AROUND YOU',
      value: 'discover_around_you'
    }
  ];
  activateRouteRef: any;
  params: any;
  credentialService: any;
  userInfo: any;
  staticServices: any;

  constructor() {}

  ngOnInit(): void {
    this.MyDefaultSubscribedValue = '1';
    this.MyDefaultLiveValue = '1';
    this.MyDefaultPostvalue = 'all-posts';
    this.SelectedSubscribedIdValue = this.MyDefaultSubscribedValue;
    this.SelectedLiveIdValue = this.MyDefaultLiveValue;
    this.selectedPostIdValue = this.MyDefaultPostvalue;
  }
  onSelectChange(selectedValue: any) {
    this.SelectedSubscribedIdValue = selectedValue.detail.value;
  }

  liveDropdown(selectedLive: any) {
    this.SelectedLiveIdValue = selectedLive.detail.value;
  }

  selectedPostContent(selectedPost: any) {
    this.selectedPostIdValue = selectedPost.detail.value;
    console.log(this.selectedPostIdValue);
  }
  getFeaturedPhotos() {
    const params = {
      skip: 1,
      limit: 8
    };
    this.staticServices.getFeaturedPhotos(params).subscribe((resp: any) => {
      if (resp) {
        this.featuredPhotos = resp.featuredPhotos;
        // console.log(this.featuredPhotos, "featured photos");
      }
    });
  }

  async addNewUserPost() {
    // const addTimelinePostModel = await this.modalCtrl.create({
    //   component: AddUserPostComponent,
    // componentProps: { is_modal_view: true },
    // // cssClass: '',
    // animated: true
    // cssClass: 'max-width : 500px'
    // });
    // await addTimelinePostModel.present();
    // addTimelinePostModel.onDidDismiss().then((resp: any) => {
    //   if (resp && resp.role) {
    //     if (resp.role && resp.role.media && resp.role.media.length) {
    //       resp.role.images = resp.role.media.filter((m: any) => m.file_type === 'image');
    //       resp.role.videos = resp.role.media.filter((m: any) => m.file_type === 'video');
    //     }
    //     // this.timelineData.unshift(resp.role);
    //   }
    // });
  }
}

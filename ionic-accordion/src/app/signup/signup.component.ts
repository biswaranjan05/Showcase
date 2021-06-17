import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  pics = [
    {
      icons: 'assets/haaye.jpg'
    },
    {
      icons: 'assets/ekk (4).jpg'
    },
    {
      icons: 'assets/ekk (2).jpg'
    },
    {
      icons: 'assets/ekk (1).jpg'
    },
    {
      icons: 'assets/ekk (6).jpg'
    },
    {
      icons: 'assets/hey2.jpg'
    },
    {
      icons: 'assets/ekk (4).jpg'
    },
    {
      icons: 'assets/h1 (1).jpg'
    },
    {
      icons: 'assets/h1 (2).jpg'
    },
    {
      icons: 'assets/h1 (3).jpg'
    },
    {
      icons: 'assets/ekk (6).jpg'
    },
    {
      icons: 'assets/h1 (5).jpg'
    },
    {
      icons: 'assets/h1 (6).jpg'
    },
    {
      icons: 'assets/ekk (6).jpg'
    },
    {
      icons: 'assets/haaye.jpg'
    },
    {
      icons: 'assets/ekk (4).jpg'
    },
    {
      icons: 'assets/ekk (2).jpg'
    },
    {
      icons: 'assets/ekk (1).jpg'
    },
    {
      icons: 'assets/h1 (2).jpg'
    },
    {
      icons: 'assets/h1 (3).jpg'
    },
    {
      icons: 'assets/ekk (6).jpg'
    },
    {
      icons: 'assets/h1 (5).jpg'
    },
    {
      icons: 'assets/h1 (6).jpg'
    },
    {
      icons: 'assets/haaye.jpg'
    },
    {
      icons: 'assets/h1 (6).jpg'
    },
    {
      icons: 'assets/ekk (3).jpg'
    },
    {
      icons: 'assets/ekk (4).jpg'
    },
    {
      icons: 'assets/haaye.jpg'
    },
    {
      icons: 'assets/h1 (6).jpg'
    },
    {
      icons: 'assets/ekk (3).jpg'
    }

    //     {
    //      'icons':'https://images.unsplash.com/photo-1510227272981-87123e259b17?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=3759e09a5b9fbe53088b23c615b6312e.jpg'
    //   },
    //   {
    //    'icons': 'https://i.ytimg.com/vi/pykFKTLaoKc/maxresdefault.jpg'
    //  },
    //  {
    //   'icons':'https://cdn.cnn.com/cnnnext/dam/assets/140630134917-12-canada-most-beautiful-places-super-tease.jpg'
    // },
    // {
    //   'icons':'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSRfkqvi-wZT4dw8KZV-4RiP4ohoWxTi4gs2AuXzoc3lhNvHXt_&usqp=CAU.jpg'
    // },
    // {
    //   'icons':'https://thestrongtraveller.files.wordpress.com/2018/07/kunming.jpg?w=940.jpg'
    // },
    // {
    //   'icons':'https://assets.traveltriangle.com/blog/wp-content/uploads/2016/07/limestone-rock-phang-nga-1-Beautiful-limestone-rock-in-the-ocean.jpg'
    // },
    // {
    //   'icons':'https://img.traveltriangle.com/blog/wp-content/uploads/2014/11/cover-for-places-to-visit-in-September-in-the-world.jpg'
    // },
    // {
    //   'icons':'https://www.wonderslist.com/wp-content/uploads/2019/05/best-places-to-visit-around-the-world.jpg'
    // },
    // {
    //   'icons':'https://images.askmen.com/top_10/dating/_1510325067.jpg'
    // },
    // {
    //   'icons':'https://mrandmrshalal.com/wp-content/uploads/2018/07/best-places-to-travel-in-the-world-for-muslims-featured-700x467.jpg'
    // },
    // {
    //   'icons':'https://i.insider.com/576be583dd0895db5f8b46da?width=1100&format=jpeg&auto=webp.jpg'
    // },
    // {
    //   'icons':'https://www.planetware.com/wpimages/2019/09/top-places-to-visit-in-the-world-angkor-wat-cambodia.jpg'
    // }
  ];
  images = [
    {
      img:
        'https://mrandmrshalal.com/wp-content/uploads/2018/07/best-places-to-travel-in-the-world-for-muslims-featured-700x467.jpg'
    },
    {
      img: 'https://static.toiimg.com/thumb/msid-70888792,imgsize-580226,width-400,resizemode-4/70888792.jpg'
    },
    {
      img:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRWCKaRAU2X9IvQdz81ZPnsd8DaUiunqKEnPTxAz0JaMY0A8zCf&usqp=CAU.jpg'
    },
    {
      img:
        'https://mrandmrshalal.com/wp-content/uploads/2018/07/best-places-to-travel-in-the-world-for-muslims-featured-700x467.jpg'
    },
    {
      img:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTPh6EIS4xnyocbCYKiZCsryxmUoa7hDYKtyuhlKnS0bd9FFI_2&usqp=CAU.jpg'
    },
    {
      img: 'https://blog-assets.busbud.com/wp-content/uploads/2019/10/Canada.png'
    },
    {
      img:
        'https://www.usnews.com/dims4/USNEWS/bd2d4d9/2147483647/resize/1200x%3E/quality/85/?url=http%3A%2F%2Fmedia.beam.usnews.com%2F03%2F1ef3273eb4bae8728a43fdd4f52325%2Fimages%2Farticles%2F704%2Fintro.jpg'
    },
    {
      img: 'https://motaen.com/upload/wallpapers/2013/02/23/17/04/34822/gNGibDbEpk-preview.jpg'
    },
    {
      img:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR9c_pO-4LlHKIRJzg6Cai-j171hP4kqYuWs9Zuv_ZbvTbOsuE6&usqp=CAU.jpg'
    },
    {
      img:
        'https://hollywoodgossip.co.in/wp-content/uploads/2019/06/The-10-Best-Places-to-Visit-Around-The-World-840x480.jpg'
    },
    {
      img:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSOw4ac29cjn4WCADKiVZ8kx6BDaCnpDr6Xnfbsgq6m0o1Z6Vcf&usqp=CAU.jpg'
    },
    {
      img:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQYbzi8VeETGmBy_avJx5zkNqdH-U431dnH46HjyHgO7aLIJ6wm&usqp=CAU.jpg'
    }
  ];

  constructor() {}

  ngOnInit() {}
}

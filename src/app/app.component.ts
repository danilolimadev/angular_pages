import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentPage = 0;
  images = [
    {
      title: 'at the beach',
      url: 'https://media.istockphoto.com/photos/womans-legs-splashing-water-on-the-beach-picture-id1255493335?b=1&k=20&m=1255493335&s=170667a&w=0&h=ekkfjImQ-xzhgZ5bekZ_-vLpsQGCxlqVP3Ej_SuPb0E='
    },
    {
      title: 'at the park',
      url: 'https://media.istockphoto.com/photos/beautiful-morning-light-in-public-park-with-green-grass-field-picture-id841278554?b=1&k=20&m=841278554&s=170667a&w=0&h=6ccMrpmGOVQ4X-CGTQ72OVGuSKSUWGTmkUUlOTOUpzs='
    },
    {
      title: 'at the cinema',
      url: 'https://media.istockphoto.com/photos/pop-corn-and-on-red-armchair-cinema-picture-id1271522601?b=1&k=20&m=1271522601&s=170667a&w=0&h=azZRRchShbrwRgq58omc1HOYABnfDDOzXJatuaZrueQ='
    },
    {
      title: 'at the beach',
      url: 'https://media.istockphoto.com/photos/womans-legs-splashing-water-on-the-beach-picture-id1255493335?b=1&k=20&m=1255493335&s=170667a&w=0&h=ekkfjImQ-xzhgZ5bekZ_-vLpsQGCxlqVP3Ej_SuPb0E='
    },
    {
      title: 'at the park',
      url: 'https://media.istockphoto.com/photos/beautiful-morning-light-in-public-park-with-green-grass-field-picture-id841278554?b=1&k=20&m=841278554&s=170667a&w=0&h=6ccMrpmGOVQ4X-CGTQ72OVGuSKSUWGTmkUUlOTOUpzs='
    },
    {
      title: 'at the cinema',
      url: 'https://media.istockphoto.com/photos/pop-corn-and-on-red-armchair-cinema-picture-id1271522601?b=1&k=20&m=1271522601&s=170667a&w=0&h=azZRRchShbrwRgq58omc1HOYABnfDDOzXJatuaZrueQ='
    },
    {
      title: 'at the beach',
      url: 'https://media.istockphoto.com/photos/womans-legs-splashing-water-on-the-beach-picture-id1255493335?b=1&k=20&m=1255493335&s=170667a&w=0&h=ekkfjImQ-xzhgZ5bekZ_-vLpsQGCxlqVP3Ej_SuPb0E='
    },
    {
      title: 'at the park',
      url: 'https://media.istockphoto.com/photos/beautiful-morning-light-in-public-park-with-green-grass-field-picture-id841278554?b=1&k=20&m=841278554&s=170667a&w=0&h=6ccMrpmGOVQ4X-CGTQ72OVGuSKSUWGTmkUUlOTOUpzs='
    },
    {
      title: 'at the cinema',
      url: 'https://media.istockphoto.com/photos/pop-corn-and-on-red-armchair-cinema-picture-id1271522601?b=1&k=20&m=1271522601&s=170667a&w=0&h=azZRRchShbrwRgq58omc1HOYABnfDDOzXJatuaZrueQ='
    },
    {
      title: 'at the beach',
      url: 'https://media.istockphoto.com/photos/womans-legs-splashing-water-on-the-beach-picture-id1255493335?b=1&k=20&m=1255493335&s=170667a&w=0&h=ekkfjImQ-xzhgZ5bekZ_-vLpsQGCxlqVP3Ej_SuPb0E='
    },
    {
      title: 'at the park',
      url: 'https://media.istockphoto.com/photos/beautiful-morning-light-in-public-park-with-green-grass-field-picture-id841278554?b=1&k=20&m=841278554&s=170667a&w=0&h=6ccMrpmGOVQ4X-CGTQ72OVGuSKSUWGTmkUUlOTOUpzs='
    },
    {
      title: 'at the cinema',
      url: 'https://media.istockphoto.com/photos/pop-corn-and-on-red-armchair-cinema-picture-id1271522601?b=1&k=20&m=1271522601&s=170667a&w=0&h=azZRRchShbrwRgq58omc1HOYABnfDDOzXJatuaZrueQ='
    },
    {
      title: 'at the beach',
      url: 'https://media.istockphoto.com/photos/womans-legs-splashing-water-on-the-beach-picture-id1255493335?b=1&k=20&m=1255493335&s=170667a&w=0&h=ekkfjImQ-xzhgZ5bekZ_-vLpsQGCxlqVP3Ej_SuPb0E='
    },
    {
      title: 'at the park',
      url: 'https://media.istockphoto.com/photos/beautiful-morning-light-in-public-park-with-green-grass-field-picture-id841278554?b=1&k=20&m=841278554&s=170667a&w=0&h=6ccMrpmGOVQ4X-CGTQ72OVGuSKSUWGTmkUUlOTOUpzs='
    },
    {
      title: 'at the cinema',
      url: 'https://media.istockphoto.com/photos/pop-corn-and-on-red-armchair-cinema-picture-id1271522601?b=1&k=20&m=1271522601&s=170667a&w=0&h=azZRRchShbrwRgq58omc1HOYABnfDDOzXJatuaZrueQ='
    },
    {
      title: 'at the beach',
      url: 'https://media.istockphoto.com/photos/womans-legs-splashing-water-on-the-beach-picture-id1255493335?b=1&k=20&m=1255493335&s=170667a&w=0&h=ekkfjImQ-xzhgZ5bekZ_-vLpsQGCxlqVP3Ej_SuPb0E='
    },
    {
      title: 'at the park',
      url: 'https://media.istockphoto.com/photos/beautiful-morning-light-in-public-park-with-green-grass-field-picture-id841278554?b=1&k=20&m=841278554&s=170667a&w=0&h=6ccMrpmGOVQ4X-CGTQ72OVGuSKSUWGTmkUUlOTOUpzs='
    },
    {
      title: 'at the cinema',
      url: 'https://media.istockphoto.com/photos/pop-corn-and-on-red-armchair-cinema-picture-id1271522601?b=1&k=20&m=1271522601&s=170667a&w=0&h=azZRRchShbrwRgq58omc1HOYABnfDDOzXJatuaZrueQ='
    },
    {
      title: 'at the beach',
      url: 'https://media.istockphoto.com/photos/womans-legs-splashing-water-on-the-beach-picture-id1255493335?b=1&k=20&m=1255493335&s=170667a&w=0&h=ekkfjImQ-xzhgZ5bekZ_-vLpsQGCxlqVP3Ej_SuPb0E='
    },
    {
      title: 'at the park',
      url: 'https://media.istockphoto.com/photos/beautiful-morning-light-in-public-park-with-green-grass-field-picture-id841278554?b=1&k=20&m=841278554&s=170667a&w=0&h=6ccMrpmGOVQ4X-CGTQ72OVGuSKSUWGTmkUUlOTOUpzs='
    },
    {
      title: 'at the cinema',
      url: 'https://media.istockphoto.com/photos/pop-corn-and-on-red-armchair-cinema-picture-id1271522601?b=1&k=20&m=1271522601&s=170667a&w=0&h=azZRRchShbrwRgq58omc1HOYABnfDDOzXJatuaZrueQ='
    },
    {
      title: 'at the beach',
      url: 'https://media.istockphoto.com/photos/womans-legs-splashing-water-on-the-beach-picture-id1255493335?b=1&k=20&m=1255493335&s=170667a&w=0&h=ekkfjImQ-xzhgZ5bekZ_-vLpsQGCxlqVP3Ej_SuPb0E='
    },
    {
      title: 'at the park',
      url: 'https://media.istockphoto.com/photos/beautiful-morning-light-in-public-park-with-green-grass-field-picture-id841278554?b=1&k=20&m=841278554&s=170667a&w=0&h=6ccMrpmGOVQ4X-CGTQ72OVGuSKSUWGTmkUUlOTOUpzs='
    },
    {
      title: 'at the cinema',
      url: 'https://media.istockphoto.com/photos/pop-corn-and-on-red-armchair-cinema-picture-id1271522601?b=1&k=20&m=1271522601&s=170667a&w=0&h=azZRRchShbrwRgq58omc1HOYABnfDDOzXJatuaZrueQ='
    },
  ];

  checkWindowIndex(index: number) {
    return Math.abs(this.currentPage - index) < 5;
  }
}

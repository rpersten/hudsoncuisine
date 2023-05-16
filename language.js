//document.addEventListener('DOMContentLoaded', getLocalLang)
//var arrLang = {
//    'en': {
//        'home': 'Home',
//        'categories': 'Categories',
//        'contactus': 'Contact Us',
//    },
//    'ru': {
//        'home': 'Главная',
//        'categories': 'Категории',
//        'contacts': 'Свяжитесь с нами',
//      }
//  }
//
//$(function(){
//    $('.translate-btn').click(function(){
//        var lang = $(this).attr('id');
//        saveLocalLang(lang)
//        $('langs').each(function(index,item) {
//            $(this).text(arrLang[lang][$(this).attr('key')]);
//        });
//    });
//});
//
//function saveLocalLang(language) {
//    let langs
//    if (localStorage.getItem('langs') === null ) {
//        langs = []
//    } else {
//        langs = JSON.parse(localStorage.getItem('langs'))
//    }
//    langs.push(language)
//    localStorage.setItem('langs', JSON.stringify(langs))
//}
//function getLocalLang(){
//    let langs
//    if (localStorage.getItem('langs') === null ) {
//        langs = []
//    }else{
//        langs = JSON.parse(localStorage.getItem('langs'))
//    }
//    langs.forEach(function (language) {
//      let lang = langs[langs.lenght - 1]
//      setTimeout(() => {
//        $('lang').each(function(index,item) {
//            $(this).text(arrLang[lang][$(this).attr('key')]);
//        });
//      }, 0)
//    })
//}
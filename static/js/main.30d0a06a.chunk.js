(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{24:function(e,t,a){},25:function(e,t,a){},45:function(e,t,a){"use strict";a.r(t);var n=a(2),r=a.n(n),c=a(18),s=a.n(c),o=(a(24),a(3)),u=a(4),i=a(6),h=a(5),l=(a(25),a(0)),b=function(e){Object(i.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={searchValue:""},e.handleSearchSubmit=function(t){t.preventDefault(),console.log("before fetch",e.state.searchValue),e.props.onSubmit(e.state.searchValue),e.setState({searchValue:""})},e.handleSearchChange=function(t){e.setState({searchValue:t.target.value.toLowerCase()})},e}return Object(u.a)(a,[{key:"render",value:function(){return Object(l.jsx)("header",{className:"Searchbar",children:Object(l.jsxs)("form",{className:"SearchForm",onSubmit:this.handleSearchSubmit,children:[Object(l.jsx)("button",{type:"submit",className:"SearchForm-button",children:Object(l.jsx)("span",{className:"SearchForm-button-label",children:"Search"})}),Object(l.jsx)("input",{className:"SearchForm-input",type:"text",name:"value",value:this.state.searchValue,autocomplete:"off",autofocus:!0,placeholder:"Search images and photos",onChange:this.handleSearchChange})]})})}}]),a}(n.Component),m=a(19),p=a.n(m);function f(e){var t=e.id,a=e.webformatURL,n=e.tags,r=e.largeImageURL;return Object(l.jsx)("li",{className:"ImageGalleryItem",children:Object(l.jsx)("img",{src:a,alt:n,"data-img":r,className:"ImageGalleryItem-image"})},t)}var g=new(function(){function e(){Object(o.a)(this,e),this._searchQuery="",this._page=1,this.perPage=12}return Object(u.a)(e,[{key:"searchQuery",get:function(){return this._searchQuery},set:function(e){return this._searchQuery=e}},{key:"page",get:function(){return this._page},set:function(e){return this._page+=e}},{key:"searchPhotos",value:function(){var e="https://pixabay.com/api/"+"?key=".concat("23141272-55f7853bfecadbbcd9800c5ad","&q=").concat(this._searchQuery,"&page=").concat(this.page,"&image_type=photo&orientation=horizontal&per_page=").concat(this.perPage);return p.a.get(e).then((function(e){return e.data})).then((function(e){return e.hits})).catch((function(e){console.log(e)}))}}]),e}()),j=function(e){Object(i.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={searchResult:[]},e}return Object(u.a)(a,[{key:"componentDidUpdate",value:function(e,t){var a=this;e.value!==this.props.value&&(g.searchQuery=this.props.value,g.searchPhotos().then((function(e){a.setState({searchResult:e})})))}},{key:"render",value:function(){return Object(l.jsx)("ul",{className:"ImageGallery",children:this.state.searchResult.length>0&&this.state.searchResult.map((function(e){var t=e.id,a=e.webformatURL,n=e.tags,r=e.largeImageURL;return Object(l.jsx)(f,{id:t,webformatURL:a,tags:n,largeImageURL:r},t)}))})}}]),a}(n.Component);function d(){return Object(l.jsx)("button",{type:"button",children:"Load more"})}var v=function(e){Object(i.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={value:""},e.getFormSubmitValue=function(t){e.setState({value:t})},e.onLoadMore=function(){},e}return Object(u.a)(a,[{key:"render",value:function(){return Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)(b,{onSubmit:this.getFormSubmitValue}),Object(l.jsx)(j,{value:this.state.value}),Object(l.jsx)(d,{onClick:this.onLoadMore})]})}}]),a}(n.Component),O=v;s.a.render(Object(l.jsx)(r.a.StrictMode,{children:Object(l.jsx)(O,{})}),document.getElementById("root"))}},[[45,1,2]]]);
//# sourceMappingURL=main.30d0a06a.chunk.js.map
<template>
  <div id="works"  class=" clearfix grid">
    <div class="container">
      <a href="http://localhost:8080/productMenu/List">
        <figure class="effect-oscar wow fadeInDown">
          <img src="static/images/portfolio/1.jpg" alt="img01"/>
          <figcaption>
              <h2>各種膚質</h2>
              <p>各種膚質<br><br>
              more..</p>
          </figcaption>
        </figure>
      </a>
      <a href="http://localhost:8080/productMenu/List">
        <figure class="effect-oscar wow fadeInDown">
          <img src="static/images/portfolio/2.jpg" alt="img01"/>
          <figcaption>
              <h2>中油性肌膚</h2>
              <p>中油性肌膚<br><br>
              more..</p>
          </figcaption>
        </figure>
      </a>
      <a href="http://localhost:8080/productMenu/List">
        <figure class="effect-oscar wow fadeInDown">
          <img src="static/images/portfolio/3.jpg" alt="img01"/>
          <figcaption>
              <h2>混合性肌膚</h2>
              <p>混合性肌膚<br><br>
              more..</p>
          </figcaption>
        </figure>
      </a>
      <a href="http://localhost:8080/productMenu/List">
        <figure class="effect-oscar wow fadeInUp">
          <img src="static/images/portfolio/4.jpg" alt="img01"/>
          <figcaption>
              <h2>乾性肌膚</h2>
              <p>乾性肌膚<br><br>
              more..</p>
          </figcaption>
        </figure>
      </a>
      <a href="http://localhost:8080/productMenu/List">
        <figure class="effect-oscar wow fadeInUp">
          <img src="static/images/portfolio/5.jpg" alt="img01"/>
          <figcaption>
              <h2>嬰兒肌膚</h2>
              <p>嬰兒肌膚<br><br>
              more..</p>
          </figcaption>
        </figure>
      </a>
      <a href="http://localhost:8080/productMenu/List">
        <figure class="effect-oscar wow fadeInUp">
          <img src="static/images/portfolio/6.jpg" alt="img01"/>
          <figcaption>
              <h2>敏感性肌膚</h2>
              <p>敏感性肌膚<br><br>
              more..</p>
          </figcaption>
        </figure>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
  margin-bottom: 70px;
}
figcaption h2 {
  background-image: linear-gradient(to top, #d5d4d0 0%, #d5d4d0 1%, #eeeeec 31%, #efeeec 75%, #e9e9e7 100%);
}
.grid {
	position: relative;
	margin: 0 auto;
	list-style: none;
	text-align: center;
}
/* Common style */
.grid figure {
	position: relative;
	float: left;
	overflow: hidden;
	margin: 0;	/*change here for spacing*/
	width: 33.333333333%;
	text-align: center;
	cursor: pointer;
}
.grid figure img {
	position: relative;
	display: block;
	max-width: 102%;
	opacity: 1;
}
.grid figure figcaption {
	padding: 2em;
	color: #fff;
	text-transform: uppercase;
	font-size: 1.25em;
	-webkit-backface-visibility: hidden;
	backface-visibility: hidden;
}
.grid figure figcaption::before,
.grid figure figcaption::after {
	pointer-events: none;
}
.grid figure figcaption {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
}
/* Anchor will cover the whole item by default */
/* For some effects it will show as a button */
.grid figure figcaption > a {
	z-index: 1000;
	text-indent: 200%;
	white-space: nowrap;
	font-size: 0;
	opacity: 0;
}
.grid figure h2 {
	word-spacing: -0.15em;
	font-weight: 700;
}
.grid figure h2,
.grid figure p {
	margin: 0;
}
.grid figure p {
	letter-spacing: 1px;
	font-size: 68.5%;
}


/*---------------*/
/***** Oscar *****/
/*---------------*/

figure.effect-oscar figcaption {
	padding: 15%;
}
figure.effect-oscar figcaption::before {
	position: absolute;
	top: 30px;
	right: 30px;
	bottom: 30px;
	left: 30px;
	border: 1px solid #fff;
	content: '';
}

figure.effect-oscar h2 {
	margin: 0;
	line-height: 1em;
	-webkit-transition: -webkit-transform 0.35s;
	transition: transform 0.35s;
	-webkit-transform: translate3d(0,100%,0);
	transform: translate3d(0,100%,0);
}
figure.effect-oscar figcaption::before,
figure.effect-oscar p {
	opacity: 0;
	-webkit-transition: opacity 0.35s, -webkit-transform 0.35s;
	transition: opacity 0.35s, transform 0.35s;
	-webkit-transform: scale(0);
	transform: scale(0);
}
figure.effect-oscar:hover h2 {
	-webkit-transform: translate3d(0,0,0);
	transform: translate3d(0,0,0);
}
figure.effect-oscar:hover figcaption::before,
figure.effect-oscar:hover p {
	opacity: 1;
	-webkit-transform: scale(1);
	transform: scale(1);
}
figure.effect-oscar:hover figcaption {
	background-color: rgba(0,0,0,0.8);
}
figure.effect-oscar:hover img {
	opacity: 0.4;
}

/*---------------*/
/***** Chico *****/
/*---------------*/


@media screen and (max-width: 50em) {
	.content {
		padding: 0 10px;
		text-align: center;
	}
	.grid figure {
		width: 50%;
	}
}
@media (max-width: 639px) {
	.grid figure {width: 100%;}
}
</style>

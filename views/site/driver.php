<?php

$this->title = Yii::t('app', 'For Drivers');

$this->registerCssFile('/css/driver.css');
$this->registerJsFile('//cdnjs.cloudflare.com/ajax/libs/gsap/1.19.0/TweenMax.min.js', ['depends' => 'yii\web\JqueryAsset']);
$this->registerJsFile('/js/driver.js', ['depends' => 'yii\web\JqueryAsset']);

?>


<section class="order">
<div class="container">
	<div class="order__layout order__layout--steps">
			<div class="row">
				<div class="col-md-12 text-center">
					<h3 class="ourcars__title ourcars__title--page">
						Как добавить автомобиль на сайт
					</h3>
				</div>
				<div class="col-md-12">
					<div class="step-nav">
						<div class="step first">
							<div class="radial-progress active" data-index="0">
								<div class="circle">
									<div class="mask full">
										<div class="fill"></div>
									</div>
									<div class="mask half">
										<div class="fill"></div>
										<div class="fill fix"></div>
									</div>
									<div class="shadow"></div>
								</div>
								<div class="inset">
									<div class="inner-circle"></div>
								</div>
							</div>
							<p>1</p>
						</div>
						<div class="step">
							<div class="line">
								<div class="progress"></div>
							</div>
							<div class="radial-progress" data-index="1">
								<div class="circle">
									<div class="mask full">
										<div class="fill"></div>
									</div>
									<div class="mask half">
										<div class="fill"></div>
										<div class="fill fix"></div>
									</div>
									<div class="shadow"></div>
								</div>
								<div class="inset">
									<div class="inner-circle"></div>
								</div>
							</div>
							<p>2</p>
						</div>
						<div class="step">
							<div class="line">
								<div class="progress"></div>
							</div>
							<div class="radial-progress" data-index="2">
								<div class="circle">
									<div class="mask full">
										<div class="fill"></div>
									</div>
									<div class="mask half">
										<div class="fill"></div>
										<div class="fill fix"></div>
									</div>
									<div class="shadow"></div>
								</div>
								<div class="inset">
									<div class="inner-circle"></div>
								</div>
							</div>
							<p>3</p>
						</div>
						<div class="step">
							<div class="line">
								<div class="progress"></div>
							</div>
							<div class="radial-progress" data-index="3">
								<div class="circle">
									<div class="mask full">
										<div class="fill"></div>
									</div>
									<div class="mask half">
										<div class="fill"></div>
										<div class="fill fix"></div>
									</div>
									<div class="shadow"></div>
								</div>
								<div class="inset">
									<div class="inner-circle"></div>
								</div>
							</div>
							<p>4</p>
						</div>
				    <div class="step">
							<div class="line">
								<div class="progress"></div>
							</div>
							<div class="radial-progress" data-index="4">
								<div class="circle">
									<div class="mask full">
										<div class="fill"></div>
									</div>
									<div class="mask half">
										<div class="fill"></div>
										<div class="fill fix"></div>
									</div>
									<div class="shadow"></div>
								</div>
								<div class="inset">
									<div class="inner-circle"></div>
								</div>
							</div>
							<p>5</p>
						</div>
					</div>
					<div class="copy-holder">
						<div class="steps-item step-1 active">
							<img class="img-responsive" src="/images/driver__step1.jpg" alt="step-1" />
						</div>
						<div class="steps-item step-2">
							<img class="img-responsive" src="/images/driver__step2.jpg" alt="step-2" />
						</div>
						<div class="steps-item step-3">
							<img class="img-responsive" src="/images/driver__step3.jpg" alt="step-3" />
						</div>
						<div class="steps-item step-4">
							<img class="img-responsive" src="/images/driver__step4.jpg" alt="step-4" />
						</div>
					  <div class="steps-item step-5">
							<img class="img-responsive" src="/images/driver__step5.jpg" alt="step-5" />
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

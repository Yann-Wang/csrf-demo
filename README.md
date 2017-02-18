## csrf demo
- realize the CSRF attack.

### start server
```shell
# start dangerous site
cd csrf-demo/dangerous_site
npm install
node ./bin/www

# start trusted site
cd ../trusted_site
npm install
node ./bin/www

```

### test

- access dangerous site : http://localhost:3000/csrf.html

csrf.html
```html

<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
	<style>
		iframe{
			height:0;
			visibility: hidden;
		}
	</style>
</head>
<body>
	<p>form表单 发送请求没有跨域限制， 可以向任意站点发送post请求</p>
	<form method="post" action="http://localhost:4000/users/csrf" enctype="application/x-www-form-urlencoded" target="iframeName">
		<label for="cntname">name: </label>
		<input type="text" name="name" id="cntname" />
		
		<input type="submit" value="upload" id="_submit" />
	</form>

	<iframe id="iframeId" name="iframeName"></iframe>

	<script>
		
	</script>

</body>
</html>

```

- input something and submit
- then go to the console of trusted site, you can find the form request.
- this result indicates that we can send cross origin request by using form. 
- add iframe element to not redirect.
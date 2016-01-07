# GTI525-static-page-builder

Quick and dirty Node+Jade+SASS static site generator for GTI525.
Has all the needed things for whatever the first lab throws at us. Including the possibility to validate the HTML and CSS using
the w3c validator tool.

## Installing
Make sure you have [Node >=4](https://nodejs.org/en/)!

```
npm install
```

## Starting a development server!
```
#Run the default gulp task to automatically build and display the site
gulp serve

#Using your favourite browser : go to http://localhost:8080
```

## Just building without a server
```
gulp build
#Check ./dist for the generated files
```

## Run w3c validations
```
gulp validate
#Make sure to correct html errors and revalidate again! The html error's will break gulp!
```

## Pretty useful links

[Jade](jade-lang.com) - The templating language used.

[Sass](sass-lang.com) - The css pre-processor used.

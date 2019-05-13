# ronline

A NodeJS app to explore multiple versions of R. 

Online version at <https://srv.colinfay.me/r-online>

## How to

+ Install node and docker 


+ Install all docker versions of `r-ver`

``` 
for i in 3.6.0 3.5.3 3.5.2 3.5.1 3.5.0 3.4.4 3.4.3 3.4.2 3.4.1 3.4.0 3.3.3 3.3.2 3.3.1 3.3.0 3.2.5 3.2.0 3.1.0
do
  docker pull rocker/r-ver:$i
done
```

+ clone this repo

+ run locally 

```
cd ronline
npm install 
npm start
```

+ Open your browser

## Notes 

+ This version of the app is designed for local use, and would need to be tweaked before deployment online (for example for https).

+ If you want to limit the RAM taken by each call to docker, you can use `--memory`  and `--memory-swap` in the docker call.

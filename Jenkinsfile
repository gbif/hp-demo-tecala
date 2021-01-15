pipeline {
    agent any
    options {
        skipStagesAfterUnstable()
    }
    stages {
        stage('Build') {
            steps {
              sh 'docker run -e JEKYLL_UID=$(id -u) -e JEKYLL_GID=$(id -g) --rm --volume="$PWD:/srv/jekyll" jekyll/jekyll:4.0 jekyll build'
            }
        }

        stage('Deploy') {
            steps {
              sh 'echo JOB_NAME=${env.JOB_NAME}'
              sh 'rsync -av _site/ jenkins-deploy@static.gbif.org:/var/www/html/hp/hp-template/'
            }
        }
    }
}

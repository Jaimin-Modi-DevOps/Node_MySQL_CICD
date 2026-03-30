resource "aws_ecr_repository" "node_app" {
  name = "node-mysql-app"

  image_scanning_configuration {
    scan_on_push = true
  }

  tags = {
    Name = "node-ecr-repo"
  }
}
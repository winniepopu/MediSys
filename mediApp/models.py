from django.db import models


class Patient(models.Model):
    cardID = models.CharField(max_length=100)
    Name = models.CharField(max_length=100)

    class Meta:
        verbose_name = 'Patient Profile'

    def __str__(self):
        return self.Name

    def __unicode__(self):
        return self.Name


class Post(models.Model):

    PatientID = models.ForeignKey(
        "Patient", on_delete=models.CASCADE, null=True)
    symptom = models.CharField(max_length=100)
    Days = models.IntegerField()
    CreateDate = models.DateTimeField(auto_now_add=True)
    TakeMedDate = models.DateTimeField(auto_now=True)
    Status = models.CharField(max_length=100, default='submit')

    class Meta:
        db_table = "post"

    def __str__(self):
        return self.symptom


class Medicine(models.Model):

    PostID = models.ForeignKey("Post", to_field='id', on_delete=models.CASCADE)
    medName = models.CharField(max_length=100)
    Time = models.CharField(max_length=100)
    Way = models.CharField(max_length=100)
    Quantity = models.CharField(max_length=100)
    Description = models.CharField(max_length=100)

    class Meta:
        db_table = "medicine"

    def __str__(self):
        return self.medName


class DiseaseDrug (models.Model):

    Disease = models.CharField(max_length=100)
    medName = models.CharField(max_length=100)
    Time = models.CharField(max_length=100)
    Way = models.CharField(max_length=100, default="依情況")
    Quantity = models.CharField(max_length=100)
    # Description = models.CharField(max_length=100)

    class Meta:
        db_table = "disease"

    def __str__(self):
        return self.Disease

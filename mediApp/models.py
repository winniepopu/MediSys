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
    AvaTimes = models.IntegerField()
    Times = models.IntegerField()
    Division = models.CharField(max_length=30)
    HosDate = models.DateTimeField()
    Status = models.CharField(max_length=100, default='submit')

    class Meta:
        db_table = "post"

    def __str__(self):
        return self.symptom


class Medicine(models.Model):

    PostID = models.ForeignKey("Post", to_field='id', on_delete=models.CASCADE)
    DrugCode = models.CharField(max_length=30)
    medName = models.CharField(max_length=100)
    Frequency = models.CharField(max_length=30)
    UseTiming = models.CharField(max_length=30)
    Part = models.CharField(max_length=30)
    Quantity = models.FloatField(default=0)
    PerCost = models.FloatField(default=0)
    TotalCost = models.FloatField(default=0)
    SideE = models.CharField(max_length=150)
    Discription = models.CharField(max_length=100)

    timePD = models.IntegerField()
    intervalD = models.IntegerField()
    Alhour = models.IntegerField()
    Alminute = models.IntegerField()

    class Meta:
        db_table = "medicine"

    def __str__(self):
        return self.medName


# class DiseaseDrug (models.Model):

#     medName = models.CharField(max_length=100)
#     Time = models.CharField(max_length=100)
#     Way = models.CharField(max_length=100, default="依情況")
#     Quantity = models.CharField(max_length=100)
#     # Description = models.CharField(max_length=100)

#     class Meta:
#         db_table = "disease"

#     def __str__(self):
#         return self.Disease

class Drug (models.Model):
    DrugCode = models.CharField(max_length=30)
    MedName = models.CharField(max_length=50)
    Frequency = models.CharField(max_length=30)
    UseTiming = models.CharField(max_length=30)
    Part = models.CharField(max_length=30)
    Quantity = models.FloatField(default=0)
    PerCost = models.FloatField(default=0)
    TotalCost = models.FloatField(default=0)
    SideEGrade = models.CharField(max_length=10)
    SideE = models.CharField(max_length=150)
    Discription = models.CharField(max_length=100)
    ImgSrc = models.CharField(max_length=300)

    class Meta:
        db_table = "drug"

    def __str__(self):
        return self.DrugCode


class Disease (models.Model):

    Disease = models.CharField(max_length=100)
    Drugs = models.ManyToManyField(Drug)
    # Description = models.CharField(max_length=100)

    class Meta:
        db_table = "disease"

    def __str__(self):
        return self.Disease

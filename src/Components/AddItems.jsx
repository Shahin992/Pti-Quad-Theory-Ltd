import { useForm, Controller } from 'react-hook-form';
import { Input, Button, Card, CardContent, FormControl, FormControlLabel, RadioGroup, Radio, Typography } from '@mui/material';

const AddItems = () => {
  const { control, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // Perform any actions with the form data here
  };

  return (
   <div className='max-w-3xl mx-auto'>
     <Card>
      <CardContent>
        <Typography variant="h5" gutterBottom sx={{ textAlign: 'center' }}>
          Add Food to Managing Culinary Delights
        </Typography>

        <form onSubmit={handleSubmit(onSubmit)}>
          <Controller
            name="name"
            control={control}
            defaultValue=""
            rules={{ required: 'Name is required' }}
            render={({ field }) => (
              <div style={{ marginBottom: '16px' }}>
                <Input {...field} fullWidth placeholder="Name" />
                {errors.name && (
                  <Typography variant="caption" color="error">
                    {errors.name.message}
                  </Typography>
                )}
              </div>
            )}
          />

          <Controller
            name="price"
            control={control}
            defaultValue=""
            rules={{ required: 'Price is required', min: { value: 1, message: 'Price must be at least 1' } }}
            render={({ field }) => (
              <div style={{ marginBottom: '16px' }}>
                <Input {...field} fullWidth type="text" placeholder="Price" />
                {errors.price && (
                  <Typography variant="caption" color="error">
                    {errors.price.message}
                  </Typography>
                )}
              </div>
            )}
          />

          <Controller
            name="image"
            control={control}
            defaultValue=""
            rules={{ required: 'Image is required' }}
            render={({ field }) => (
              <div style={{ marginBottom: '16px' }}>
                <Input {...field} fullWidth type="file" accept="image/*" />
                {errors.image && (
                  <Typography variant="caption" color="error">
                    {errors.image.message}
                  </Typography>
                )}
              </div>
            )}
          />

          <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginBottom: '16px' }}>
            <Controller
              name="IsPopular"
              control={control}
              rules={{ required: 'Please select Is Popular' }}
              render={({ field }) => (
                <FormControl component="fieldset">
                  <Typography variant="subtitle1">Popular</Typography>
                  <RadioGroup {...field} row>
                    <FormControlLabel
                      value="true"
                      control={<Radio style={{ color: '#ff9800' }} />}
                      label="True"
                    />
                    <FormControlLabel
                      value="false"
                      control={<Radio style={{ color: '#ff9800' }} />}
                      label="False"
                    />
                  </RadioGroup>
                  {errors.IsPopular && (
                    <Typography variant="caption" color="error">
                      {errors.IsPopular.message}
                    </Typography>
                  )}
                </FormControl>
              )}
            />
          </div>

          <Controller
            name="IsRecommended"
            control={control}
            rules={{ required: 'Please select Is Recommended' }}
            render={({ field }) => (
              <FormControl component="fieldset" style={{ marginBottom: '16px' }}>
                <Typography variant="subtitle1">Recommended</Typography>
                <RadioGroup {...field} row>
                  <FormControlLabel
                    value="true"
                    control={<Radio style={{ color: '#ff9800' }} />}
                    label="True"
                  />
                  <FormControlLabel
                    value="false"
                    control={<Radio style={{ color: '#ff9800' }} />}
                    label="False"
                  />
                </RadioGroup>
                {errors.IsRecommended && (
                  <Typography variant="caption" color="error">
                    {errors.IsRecommended.message}
                  </Typography>
                )}
              </FormControl>
            )}
          />

          <Button type="submit" variant="contained" style={{ backgroundColor: '#ff9800' }} fullWidth>
            Submit
          </Button>
        </form>
      </CardContent>
    </Card>
   </div>
  );
};

export default AddItems;
